#!/usr/bin/env bash
set -euo pipefail

# One-command deploy to Netcup Webhosting 2000 (maprisma.com & maprisma.de)
# ALLOWLIST_STAGE=1 (managed by Netcup Control — never stages secrets, symlinks, .ssh, or sidecar files)
SCRIPT_PATH="${BASH_SOURCE[0]}"
if [[ -L "${SCRIPT_PATH}" ]]; then
  echo "Refusing symlinked deploy.sh: ${SCRIPT_PATH}" >&2
  exit 2
fi
SCRIPT_DIR="$(cd "$(dirname "${SCRIPT_PATH}")" && pwd -P)"
SITE_ROOT="${NETCUP_SITE_ROOT:-${SCRIPT_DIR}}"
REMOTE_DIR="${NETCUP_REMOTE_DIR:-maprisma.com/httpdocs}"
REDIRECT_DIR="${NETCUP_REDIRECT_DIR:-maprisma.de/httpdocs}"

check_no_symlink_ancestors() {
  local p="$1"
  if [[ -z "$p" || "$p" != /* || "$p" == *".."* ]]; then
    echo "Refusing unsafe local path: $p" >&2
    exit 2
  fi
  local cur="$p"
  while [[ "$cur" != "/" && -n "$cur" ]]; do
    if [[ -L "$cur" ]]; then
      echo "Refusing symlinked path component: $cur" >&2
      exit 2
    fi
    cur="$(dirname "$cur")"
  done
}

validate_rel_docroot() {
  local d="$1"
  if [[ -z "$d" || "$d" == /* || "$d" == *".."* || ! "$d" =~ ^[A-Za-z0-9._/-]+$ ]]; then
    echo "Refusing unsafe remote directory: $d" >&2
    exit 2
  fi
}
check_no_symlink_ancestors "${SCRIPT_DIR}"
check_no_symlink_ancestors "${SITE_ROOT}"
validate_rel_docroot "${REMOTE_DIR}"
validate_rel_docroot "${REDIRECT_DIR}"

DRY_RUN=0
FROM_STAGE=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run|-n)
      DRY_RUN=1
      shift
      ;;
    --from-stage)
      if [[ $# -lt 2 || -z "${2:-}" ]]; then
        echo "--from-stage requires a directory path" >&2
        exit 2
      fi
      FROM_STAGE="$2"
      shift 2
      ;;
    --from-stage=*)
      FROM_STAGE="${1#*=}"
      shift
      ;;
    *)
      echo "Unknown option: $1" >&2
      exit 2
      ;;
  esac
done

if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "=== DRY RUN (no remote or SSH files will be changed) ==="
fi

OWN_STAGE_DIR=""
cleanup_stage() {
  if [[ -n "${OWN_STAGE_DIR}" && -d "${OWN_STAGE_DIR}" ]]; then
    rm -rf "${OWN_STAGE_DIR}"
  fi
}
trap cleanup_stage EXIT

if [[ -n "${FROM_STAGE}" ]]; then
  check_no_symlink_ancestors "${FROM_STAGE}"
  if [[ ! -d "${FROM_STAGE}" ]]; then
    echo "Pre-staged bundle directory does not exist: ${FROM_STAGE}" >&2
    exit 2
  fi
  STAGE_DIR="${FROM_STAGE}"
else
  OWN_STAGE_DIR="$(mktemp -d)"
  chmod 700 "${OWN_STAGE_DIR}"
  STAGE_DIR="${OWN_STAGE_DIR}"

  # Strict public allowlist staging (refuses symlinks & excludes dot-files identically to Core)
  mkdir -p "${STAGE_DIR}/api/cache"
  for f in index.html legal.html robots.txt sitemap.xml .htaccess; do
    if [[ -L "${SITE_ROOT}/${f}" ]]; then echo "Refusing symlink: ${f}" >&2; exit 2; fi
    [[ -f "${SITE_ROOT}/${f}" ]] && cp -p "${SITE_ROOT}/${f}" "${STAGE_DIR}/${f}"
  done
  for d in css js assets; do
    if [[ -L "${SITE_ROOT}/${d}" ]]; then echo "Refusing symlinked dir: ${d}" >&2; exit 2; fi
    if [[ -d "${SITE_ROOT}/${d}" ]]; then
      if [[ -n "$(find "${SITE_ROOT}/${d}" -not -name '.*' -not -path '*/.*' -type l -print -quit)" ]]; then
        echo "Refusing symlink inside ${d}/" >&2
        exit 2
      fi
      rsync -rlt --no-links --exclude '.*' "${SITE_ROOT}/${d}/" "${STAGE_DIR}/${d}/"
    fi
  done
  for d in api api/cache; do
    if [[ -L "${SITE_ROOT}/${d}" ]]; then echo "Refusing symlinked dir: ${d}" >&2; exit 2; fi
  done
  shopt -s nullglob
  for php_file in "${SITE_ROOT}"/api/*.php; do
    base_php="$(basename "${php_file}")"
    [[ "${base_php}" == .* ]] && continue
    if [[ -L "${php_file}" ]]; then echo "Refusing symlink: ${php_file}" >&2; exit 2; fi
    [[ -f "${php_file}" ]] && cp -p "${php_file}" "${STAGE_DIR}/api/"
  done
  shopt -u nullglob
  if [[ -L "${SITE_ROOT}/api/cache/.htaccess" ]]; then
    echo "Refusing symlink: api/cache/.htaccess" >&2
    exit 2
  fi
  if [[ -f "${SITE_ROOT}/api/cache/.htaccess" ]]; then
    cp -p "${SITE_ROOT}/api/cache/.htaccess" "${STAGE_DIR}/api/cache/.htaccess"
  fi
fi

# Validate STAGE_DIR regardless of whether staged here or passed via --from-stage
if [[ -n "$(find "${STAGE_DIR}" -type l -print -quit)" ]]; then
  echo "Refusing to upload symlinks in staged bundle" >&2
  exit 2
fi
while IFS= read -r -d '' entry; do
  rel="${entry#"${STAGE_DIR}/"}"
  case "${rel}" in
    index.html|legal.html|robots.txt|sitemap.xml|.htaccess|api|api/cache|api/cache/.htaccess)
      ;;
    api/*.php)
      base_rel="$(basename "${rel}")"
      if [[ "${base_rel}" == .* || "${rel}" == api/*/* ]]; then
        echo "Refusing unexpected api entry in stage: ${rel}" >&2
        exit 2
      fi
      ;;
    css|css/*|js|js/*|assets|assets/*)
      if [[ "/${rel}" == */.* ]]; then
        echo "Refusing hidden dot-entry in stage: ${rel}" >&2
        exit 2
      fi
      ;;
    *)
      echo "Refusing unexpected entry in upload stage: ${rel}" >&2
      exit 2
      ;;
  esac
done < <(find "${STAGE_DIR}" -mindepth 1 -print0)

mkdir -p "${STAGE_DIR}/api/cache"

if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "Archive manifest staged for upload to ${REMOTE_DIR}/:"
  tar -C "${STAGE_DIR}" -cf - . | tar -tf - | sed 's|^\./|  |' | sort
  exit 0
fi

SSH_OPTS=(-o ConnectTimeout=10)
if [[ ! -L "${SITE_ROOT}/.ssh" && ! -L "${SITE_ROOT}/.ssh/id_ed25519_netcup" && -f "${SITE_ROOT}/.ssh/id_ed25519_netcup" ]]; then
  chmod 700 "${SITE_ROOT}/.ssh" 2>/dev/null || true
  chmod 600 "${SITE_ROOT}/.ssh/id_ed25519_netcup" 2>/dev/null || true
  SSH_TARGET="${NETCUP_SSH_HOST:-hosting255642@hosting255642.a9820.netcup.net}"
  SSH_OPTS+=(
    -i "${SITE_ROOT}/.ssh/id_ed25519_netcup"
    -o IdentitiesOnly=yes
  )
  if [[ ! -L "${SITE_ROOT}/.ssh/known_hosts" && -f "${SITE_ROOT}/.ssh/known_hosts" ]]; then
    SSH_OPTS+=(-o UserKnownHostsFile="${SITE_ROOT}/.ssh/known_hosts")
  fi
else
  SSH_TARGET="${NETCUP_SSH_HOST:-netcup-maprisma}"
fi

if [[ "${SSH_TARGET}" == -* || ! "${SSH_TARGET}" =~ ^[A-Za-z0-9._@-]+$ ]]; then
  echo "Refusing invalid SSH target: ${SSH_TARGET}" >&2
  exit 2
fi

echo "→ Deploying Maprisma website to ${SSH_TARGET}:${REMOTE_DIR}/ ..."
find "${STAGE_DIR}" -mindepth 1 -type d -exec chmod 755 {} +
find "${STAGE_DIR}" -mindepth 1 -type f -exec chmod 644 {} +
chmod 750 "${STAGE_DIR}/api/cache"
tar -C "${STAGE_DIR}" -czf - . | ssh "${SSH_OPTS[@]}" -- "${SSH_TARGET}" "
  mkdir -p '${REMOTE_DIR}/api/cache' &&
  rm -rf '${REMOTE_DIR}/css' '${REMOTE_DIR}/js' '${REMOTE_DIR}/assets' '${REMOTE_DIR}/favicon.ico' &&
  tar -xzf - --no-overwrite-dir -C '${REMOTE_DIR}' &&
  chmod 750 '${REMOTE_DIR}' '${REMOTE_DIR}/api/cache' &&
  chmod 755 '${REMOTE_DIR}/api'
"

echo "→ Ensuring 301 redirect on ${SSH_TARGET}:${REDIRECT_DIR}/ ..."
ssh "${SSH_OPTS[@]}" -- "${SSH_TARGET}" "
  if [ -d '${REDIRECT_DIR}' ]; then
    chmod 750 '${REDIRECT_DIR}'
    rm -f '${REDIRECT_DIR}/index.html' '${REDIRECT_DIR}/favicon.ico'
    cat > '${REDIRECT_DIR}/.htaccess' <<'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_URI} !^/\.well-known/ [NC]
  RewriteRule ^ https://maprisma.com%{REQUEST_URI} [R=301,L]
</IfModule>
EOF
    chmod 644 '${REDIRECT_DIR}/.htaccess'
  fi
"

echo "✓ Deployment complete!"
echo "  Live Website: https://maprisma.com"
echo "  DE Redirect:  https://maprisma.de -> https://maprisma.com"
