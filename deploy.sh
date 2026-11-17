#!/usr/bin/env bash
set -euo pipefail

# One-command deploy to Netcup Webhosting 2000 (maprisma.com & maprisma.de)
# Self-contained: uses portable SSH key in /mnt/Data/Projects/Netcup/.ssh/ if present.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REMOTE_DIR="${NETCUP_REMOTE_DIR:-maprisma.com/httpdocs}"
REDIRECT_DIR="${NETCUP_REDIRECT_DIR:-maprisma.de/httpdocs}"

SSH_OPTS=(-o ConnectTimeout=10)
if [[ -f "${SCRIPT_DIR}/.ssh/id_ed25519_netcup" ]]; then
  chmod 700 "${SCRIPT_DIR}/.ssh" 2>/dev/null || true
  chmod 600 "${SCRIPT_DIR}/.ssh/id_ed25519_netcup" 2>/dev/null || true
  SSH_TARGET="${NETCUP_SSH_HOST:-hosting255642@hosting255642.a9820.netcup.net}"
  SSH_OPTS+=(
    -i "${SCRIPT_DIR}/.ssh/id_ed25519_netcup"
    -o IdentitiesOnly=yes
  )
  if [[ -f "${SCRIPT_DIR}/.ssh/known_hosts" ]]; then
    SSH_OPTS+=(-o UserKnownHostsFile="${SCRIPT_DIR}/.ssh/known_hosts")
  fi
else
  SSH_TARGET="${NETCUP_SSH_HOST:-netcup-maprisma}"
fi

DRY_RUN=0
if [[ "${1:-}" == "--dry-run" || "${1:-}" == "-n" ]]; then
  DRY_RUN=1
  echo "=== DRY RUN (no remote files will be changed) ==="
fi

STAGE_DIR="$(mktemp -d)"
trap 'rm -rf "${STAGE_DIR}"' EXIT

# Stage clean website bundle locally (never include .ssh, .git, or agent metadata)
rsync -a \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude '.ssh/' \
  --exclude '.secrets/' \
  --exclude '.agents/' \
  --exclude '.agent/' \
  --exclude 'AGENTS.md' \
  --exclude 'CLAUDE.md' \
  --exclude 'GEMINI.md' \
  --exclude '.nojekyll' \
  --exclude 'CNAME' \
  --exclude 'README.md' \
  --exclude 'deploy.sh' \
  --exclude 'api/cache/*.json' \
  --exclude 'api/cache/*.lock' \
  --exclude 'api/cache/*.txt' \
  "${SCRIPT_DIR}/" "${STAGE_DIR}/"

if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "Files staged for upload to ${SSH_TARGET}:${REMOTE_DIR}/:"
  (cd "${STAGE_DIR}" && find . -type f | sed 's|^\./|  |' | sort)
  exit 0
fi

echo "→ Deploying Maprisma website to ${SSH_TARGET}:${REMOTE_DIR}/ ..."
tar -C "${STAGE_DIR}" -czf - . | ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" "
  mkdir -p '${REMOTE_DIR}/api/cache' &&
  rm -rf '${REMOTE_DIR}/css' '${REMOTE_DIR}/js' '${REMOTE_DIR}/assets' '${REMOTE_DIR}/favicon.ico' &&
  tar -xzf - -C '${REMOTE_DIR}' &&
  chmod 750 '${REMOTE_DIR}/api/cache'
"

echo "→ Ensuring 301 redirect on ${SSH_TARGET}:${REDIRECT_DIR}/ ..."
ssh "${SSH_OPTS[@]}" "${SSH_TARGET}" "
  if [ -d '${REDIRECT_DIR}' ]; then
    rm -f '${REDIRECT_DIR}/index.html' '${REDIRECT_DIR}/favicon.ico'
    cat > '${REDIRECT_DIR}/.htaccess' <<'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_URI} !^/\.well-known/ [NC]
  RewriteRule ^ https://maprisma.com%{REQUEST_URI} [R=301,L]
</IfModule>
EOF
  fi
"

echo "✓ Deployment complete!"
echo "  Live Website: https://maprisma.com"
echo "  DE Redirect:  https://maprisma.de -> https://maprisma.com"
