# Maprisma Website (`maprisma.com`)

Static, zero-dependency website showcasing all **20 Maprisma apps, applets, shell tools, and signed add-ons** with interactive screenshot galleries, EN/DE language switching, real version badges, and GitHub download/install instructions.

Hosted on **GitHub Pages** (`maprisma/maprisma.github.io`) with custom domains managed via **Netcup DNS**:
- **Primary domain:** `https://maprisma.com` (`www.maprisma.com` redirects via GitHub Pages).
- **German domain redirect:** `https://maprisma.de` (`maprisma/maprisma-de-redirect`) redirects visitors preserving full path, query string, and hash to `https://maprisma.com`.
- **Zero third-party fonts or trackers on page load** — 100% self-contained static assets, no cookies, no analytics.
- **Bilingual (`EN` / `DE`)** — automatically matches browser language with an instant toggle in the header.
- **Privacy-respecting GitHub Release check** — displays real bundled repo versions out of the box and queries `api.github.com` only when a visitor explicitly clicks *Check GitHub Releases*.
- **No build step required** — edit files directly and push to `main`.

## Project Structure

- `index.html` — Main landing page, filter bar, install guide, lightbox & install modals.
- `legal.html` — Bilingual **Impressum (§ 5 DDG)** & **Datenschutzerklärung (DSGVO)** for GitHub Pages hosting + Netcup DNS.
- `CNAME` — Custom domain declaration (`maprisma.com`) for GitHub Pages.
- `.nojekyll` — Disables Jekyll processing so static assets are served verbatim.
- `css/styles.css` — Prismatic dark & light theme styling, responsive 2-col / 3-col card grid.
- `js/i18n.js` — English & German UI strings.
- `js/apps.js` — **App catalog data**: edit versions, EN/DE descriptions, GitHub URLs, install commands, and screenshot lists here.
- `js/main.js` — Filtering, search, language toggle, per-card screenshot slider, lightbox, and opt-in GitHub API release/star sync.
- `assets/icons/` — Official Maprisma SVG app icons.
- `assets/screenshots/` — Cropped `.webp`/`.gif` UI screenshots + `.svg` UI previews.

## Preview Locally

```bash
cd /mnt/Data/Projects/Netcup
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deploying Updates

Push commits directly to `main` on `maprisma/maprisma.github.io` — GitHub Pages automatically deploys within ~30–60 seconds:

```bash
git add -A
git commit -m "Update website"
git push origin main
```
