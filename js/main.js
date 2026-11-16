/**
 * Maprisma Showcase — Interactive UI, Bilingual (EN/DE) & Live GitHub Sync
 */
(function () {
  "use strict";

  const apps = window.MAPRISMA_APPS || [];
  const i18n = window.MAPRISMA_I18N || { en: {}, de: {} };

  function detectInitialLang() {
    const saved = localStorage.getItem("maprisma-site-lang");
    if (saved === "de" || saved === "en") return saved;
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("de") ? "de" : "en";
  }

  // Load cached GitHub live metadata from sessionStorage if previously requested
  let cachedGithubMeta = {};
  try {
    cachedGithubMeta = JSON.parse(sessionStorage.getItem("maprisma-gh-meta") || "{}");
  } catch (_) {
    cachedGithubMeta = {};
  }

  const state = {
    lang: detectInitialLang(),
    category: "all",
    desktop: "all",
    query: "",
    cols: 2,
    cardSlide: {}, // appId -> current screenshot index
    lightbox: { appId: null, index: 0 },
    ghMeta: cachedGithubMeta, // repoSlug -> { version, stars, releaseUrl }
    syncState: Object.keys(cachedGithubMeta).length > 0 ? "done" : "idle"
  };

  const gridEl = document.getElementById("apps-grid");
  const countEl = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const desktopSelect = document.getElementById("desktop-filter");
  const filterChips = document.querySelectorAll(".filter-chip");
  const viewButtons = document.querySelectorAll("[data-cols]");
  const langButtons = document.querySelectorAll("[data-lang]");
  const syncBtn = document.getElementById("sync-github-btn");

  // Lightbox elements
  const lightboxEl = document.getElementById("lightbox-modal");
  const lbTitle = document.getElementById("lb-title");
  const lbImg = document.getElementById("lb-image");
  const lbCaption = document.getElementById("lb-caption");
  const lbCounter = document.getElementById("lb-counter");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");

  // Install modal elements
  const installModalEl = document.getElementById("install-modal");
  const imTitle = document.getElementById("im-title");
  const imDesc = document.getElementById("im-desc");
  const imCode = document.getElementById("im-code");
  const imGithubBtn = document.getElementById("im-github");
  const imReleaseBtn = document.getElementById("im-releases");
  const imCopyBtn = document.getElementById("im-copy");

  function t(key) {
    const dict = i18n[state.lang] || i18n.en || {};
    return dict[key] !== undefined ? dict[key] : (i18n.en && i18n.en[key]) || key;
  }

  function appText(app, field) {
    if (state.lang === "de" && app[`${field}_de`]) {
      return app[`${field}_de`];
    }
    return app[field];
  }

  function shotCaption(shot, app) {
    if (!shot) return app.name;
    if (state.lang === "de" && shot.caption_de) return shot.caption_de;
    return shot.caption || app.name;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = state.lang;
    document.title = t("pageTitle");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    if (searchInput) {
      searchInput.placeholder = t("searchPlaceholder");
    }

    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.lang);
    });

    updateSyncButtonLabel();
  }

  function updateSyncButtonLabel() {
    if (!syncBtn) return;
    if (state.syncState === "loading") {
      syncBtn.textContent = t("syncVersionsLoading");
      syncBtn.disabled = true;
    } else if (state.syncState === "done") {
      syncBtn.textContent = t("syncVersionsDone");
      syncBtn.disabled = false;
      syncBtn.classList.add("synced");
    } else if (state.syncState === "ratelimit") {
      syncBtn.textContent = t("syncVersionsRateLimit");
      syncBtn.disabled = false;
    } else {
      syncBtn.textContent = t("syncVersionsBtn");
      syncBtn.disabled = false;
      syncBtn.classList.remove("synced");
    }
  }

  function getEffectiveVersion(app) {
    const live = app.repoSlug && state.ghMeta[app.repoSlug];
    return (live && live.version) || app.version || "";
  }

  function getEffectiveStars(app) {
    const live = app.repoSlug && state.ghMeta[app.repoSlug];
    return live && typeof live.stars === "number" ? live.stars : null;
  }

  function getEffectiveReleasesUrl(app) {
    const live = app.repoSlug && state.ghMeta[app.repoSlug];
    return (live && live.releaseUrl) || app.releases || null;
  }

  function getFilteredApps() {
    const q = state.query.trim().toLowerCase();
    return apps.filter((app) => {
      if (state.category !== "all" && app.category !== state.category) {
        return false;
      }
      if (state.desktop !== "all" && !app.desktops.includes(state.desktop)) {
        return false;
      }
      if (q) {
        const hay = [
          app.name,
          app.tagline,
          app.tagline_de,
          app.description,
          app.description_de,
          app.tech,
          app.categoryLabel,
          app.categoryLabel_de,
          ...(app.desktops || []),
          ...(app.highlights || []),
          ...(app.highlights_de || [])
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      }
      return true;
    });
  }

  function renderCards() {
    if (!gridEl) return;
    const filtered = getFilteredApps();
    if (countEl) {
      countEl.textContent =
        filtered.length === apps.length
          ? t("showingAll").replace("{total}", apps.length)
          : t("showingFiltered")
              .replace("{count}", filtered.length)
              .replace("{total}", apps.length);
    }

    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-state">
          <p>${escapeHtml(t("emptyState"))}</p>
          <button class="btn btn-secondary" id="reset-filters-btn" type="button">${escapeHtml(t("resetFilters"))}</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filters-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.category = "all";
          state.desktop = "all";
          state.query = "";
          searchInput.value = "";
          desktopSelect.value = "all";
          filterChips.forEach((c) => c.classList.toggle("active", c.dataset.category === "all"));
          renderCards();
        });
      }
      return;
    }

    gridEl.innerHTML = filtered
      .map((app) => {
        const shots = app.screenshots || [];
        const idx = state.cardSlide[app.id] || 0;
        const activeShot = shots[idx] || { src: "", caption: app.name };
        const multi = shots.length > 1;
        const ver = getEffectiveVersion(app);
        const stars = getEffectiveStars(app);
        const relUrl = getEffectiveReleasesUrl(app);
        const highlights = appText(app, "highlights") || [];

        return `
        <article class="app-card" data-app-id="${escapeHtml(app.id)}">
          <div class="card-media">
            <img
              src="${escapeHtml(activeShot.src)}"
              alt="${escapeHtml(shotCaption(activeShot, app))}"
              loading="lazy"
              data-action="open-lightbox"
              data-app-id="${escapeHtml(app.id)}"
            />
            <div class="media-badge-top">
              ${
                multi
                  ? `<span class="shot-counter">${idx + 1} / ${shots.length}</span>`
                  : `<span></span>`
              }
              <button
                type="button"
                class="zoom-pill"
                data-action="open-lightbox"
                data-app-id="${escapeHtml(app.id)}"
              >${escapeHtml(t("enlargeBtn"))}</button>
            </div>
            ${
              multi
                ? `
              <button type="button" class="media-nav prev" data-action="slide-prev" data-app-id="${escapeHtml(app.id)}" aria-label="Previous screenshot">‹</button>
              <button type="button" class="media-nav next" data-action="slide-next" data-app-id="${escapeHtml(app.id)}" aria-label="Next screenshot">›</button>
              <div class="media-dots">
                ${shots
                  .map(
                    (_, i) =>
                      `<button type="button" class="media-dot ${
                        i === idx ? "active" : ""
                      }" data-action="slide-goto" data-app-id="${escapeHtml(
                        app.id
                      )}" data-index="${i}" aria-label="Screenshot ${i + 1}"></button>`
                  )
                  .join("")}
              </div>
            `
                : ""
            }
          </div>

          <div class="card-body">
            <div class="card-header">
              <img class="card-icon" src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.name)} icon" loading="lazy" />
              <div class="card-title-wrap">
                <div class="card-title-row">
                  <h3 class="card-title">${escapeHtml(app.name)}</h3>
                  <div class="card-badges">
                    ${ver ? `<span class="version-pill">${escapeHtml(ver)}</span>` : ""}
                    ${stars !== null && stars > 0 ? `<span class="star-pill">★ ${stars}</span>` : ""}
                    <span class="category-tag">${escapeHtml(appText(app, "categoryLabel"))}</span>
                  </div>
                </div>
                <p class="card-tagline">${escapeHtml(appText(app, "tagline"))}</p>
              </div>
            </div>

            <p class="card-desc">${escapeHtml(appText(app, "description"))}</p>

            <ul class="card-highlights">
              ${highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
            </ul>

            <div class="card-meta-pills">
              ${(app.desktops || []).map((d) => `<span class="desktop-pill">${escapeHtml(d)}</span>`).join("")}
              <span class="tech-pill">${escapeHtml(app.tech)}</span>
            </div>

            <div class="card-actions">
              <button
                type="button"
                class="btn btn-primary"
                data-action="open-install"
                data-app-id="${escapeHtml(app.id)}"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                ${escapeHtml(t("downloadInstallBtn"))}
              </button>
              ${
                relUrl
                  ? `<a class="btn btn-secondary" href="${escapeHtml(relUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("releasesBtn"))} ↗</a>`
                  : ""
              }
              <a
                class="btn btn-secondary"
                href="${escapeHtml(app.github)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.42.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                ${escapeHtml(t("githubBtn"))}
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function updateCardSlide(appId, nextIdx) {
    const app = apps.find((a) => a.id === appId);
    if (!app || !app.screenshots || app.screenshots.length < 2) return;
    const total = app.screenshots.length;
    const normalized = ((nextIdx % total) + total) % total;
    state.cardSlide[appId] = normalized;

    const card = gridEl.querySelector(`.app-card[data-app-id="${CSS.escape(appId)}"]`);
    if (!card) return;
    const img = card.querySelector(".card-media img");
    const counter = card.querySelector(".shot-counter");
    const dots = card.querySelectorAll(".media-dot");
    const shot = app.screenshots[normalized];

    if (img && shot) {
      img.src = shot.src;
      img.alt = shotCaption(shot, app);
    }
    if (counter) {
      counter.textContent = `${normalized + 1} / ${total}`;
    }
    dots.forEach((d, i) => d.classList.toggle("active", i === normalized));
  }

  // Opt-in Live GitHub Release & Star Sync (DSGVO-friendly: runs only on explicit click)
  async function syncGithubReleases() {
    if (state.syncState === "loading") return;
    state.syncState = "loading";
    updateSyncButtonLabel();

    try {
      // Single lightweight org repos call fetches stars for up to 100 repos in 1 request!
      const orgResp = await fetch("https://api.github.com/orgs/maprisma/repos?per_page=100", {
        headers: { Accept: "application/vnd.github+json" }
      });

      if (orgResp.status === 403 || orgResp.status === 429) {
        state.syncState = "ratelimit";
        updateSyncButtonLabel();
        return;
      }

      if (orgResp.ok) {
        const repos = await orgResp.json();
        if (Array.isArray(repos)) {
          repos.forEach((r) => {
            const slug = r.full_name;
            state.ghMeta[slug] = Object.assign({}, state.ghMeta[slug], {
              stars: r.stargazers_count || 0
            });
          });
        }
      }

      // Fetch latest release tag for repositories with releases
      const releaseTargets = apps.filter((a) => a.repoSlug && a.releases);
      await Promise.all(
        releaseTargets.map(async (app) => {
          try {
            const res = await fetch(`https://api.github.com/repos/${app.repoSlug}/releases/latest`, {
              headers: { Accept: "application/vnd.github+json" }
            });
            if (res.ok) {
              const rel = await res.json();
              if (rel && rel.tag_name) {
                state.ghMeta[app.repoSlug] = Object.assign({}, state.ghMeta[app.repoSlug], {
                  version: rel.tag_name.startsWith("v") ? rel.tag_name : `v${rel.tag_name}`,
                  releaseUrl: rel.html_url || app.releases
                });
              }
            }
          } catch (_) {
            // Keep bundled version on individual network failure
          }
        })
      );

      sessionStorage.setItem("maprisma-gh-meta", JSON.stringify(state.ghMeta));
      state.syncState = "done";
      updateSyncButtonLabel();
      renderCards();
    } catch (_) {
      state.syncState = "ratelimit";
      updateSyncButtonLabel();
    }
  }

  // Lightbox logic
  function openLightbox(appId, index) {
    const app = apps.find((a) => a.id === appId);
    if (!app || !app.screenshots || !app.screenshots.length) return;
    state.lightbox.appId = appId;
    state.lightbox.index = typeof index === "number" ? index : state.cardSlide[appId] || 0;
    syncLightbox();
    lightboxEl.classList.add("open");
    lightboxEl.setAttribute("aria-hidden", "false");
  }

  function syncLightbox() {
    const app = apps.find((a) => a.id === state.lightbox.appId);
    if (!app) return;
    const shots = app.screenshots;
    const idx = ((state.lightbox.index % shots.length) + shots.length) % shots.length;
    state.lightbox.index = idx;
    const shot = shots[idx];

    lbTitle.textContent = `${app.name} ${getEffectiveVersion(app)}`.trim();
    lbImg.src = shot.src;
    lbImg.alt = shotCaption(shot, app);
    lbCaption.textContent = shotCaption(shot, app);
    lbCounter.textContent = shots.length > 1 ? `${idx + 1} / ${shots.length}` : "";
    lbPrev.style.display = shots.length > 1 ? "flex" : "none";
    lbNext.style.display = shots.length > 1 ? "flex" : "none";
  }

  function closeModals() {
    if (lightboxEl) {
      lightboxEl.classList.remove("open");
      lightboxEl.setAttribute("aria-hidden", "true");
    }
    if (installModalEl) {
      installModalEl.classList.remove("open");
      installModalEl.setAttribute("aria-hidden", "true");
    }
  }

  function openInstallModal(appId) {
    const app = apps.find((a) => a.id === appId);
    if (!app) return;
    const ver = getEffectiveVersion(app);
    const relUrl = getEffectiveReleasesUrl(app);

    imTitle.textContent = `${t("modalInstallPrefix")} ${app.name} ${ver ? `(${ver})` : ""}`.trim();
    imDesc.textContent = appText(app, "tagline");
    imCode.textContent = app.installCmd;
    imCopyBtn.textContent = t("copyBtn");
    imGithubBtn.href = app.github;
    imGithubBtn.textContent = t("modalOpenRepo");

    if (relUrl) {
      imReleaseBtn.href = relUrl;
      imReleaseBtn.textContent = t("modalDownloadRelease");
      imReleaseBtn.style.display = "inline-flex";
    } else {
      imReleaseBtn.style.display = "none";
    }

    installModalEl.classList.add("open");
    installModalEl.setAttribute("aria-hidden", "false");
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
      const orig = btn.textContent;
      btn.textContent = t("copiedBtn");
      setTimeout(() => {
        btn.textContent = orig;
      }, 1700);
    } catch (_) {
      // Clipboard fallback
    }
  }

  // Event listeners
  if (gridEl) {
    gridEl.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]");
      if (!target) return;
      const action = target.dataset.action;
      const appId = target.dataset.appId;

      if (action === "slide-prev") {
        updateCardSlide(appId, (state.cardSlide[appId] || 0) - 1);
      } else if (action === "slide-next") {
        updateCardSlide(appId, (state.cardSlide[appId] || 0) + 1);
      } else if (action === "slide-goto") {
        updateCardSlide(appId, Number(target.dataset.index || 0));
      } else if (action === "open-lightbox") {
        openLightbox(appId);
      } else if (action === "open-install") {
        openInstallModal(appId);
      }
    });
  }

  const heroShowcase = document.getElementById("hero-showcase");
  if (heroShowcase) {
    heroShowcase.addEventListener("click", () => openLightbox("maprisma", 0));
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.category;
      filterChips.forEach((c) => c.classList.toggle("active", c === chip));
      renderCards();
    });
  });

  if (desktopSelect) {
    desktopSelect.addEventListener("change", () => {
      state.desktop = desktopSelect.value;
      renderCards();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value;
      renderCards();
    });
  }

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cols = Number(btn.dataset.cols);
      state.cols = cols;
      gridEl.classList.toggle("cols-3", cols === 3);
      viewButtons.forEach((b) => b.classList.toggle("active", b === btn));
    });
  });

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("maprisma-site-lang", state.lang);
      applyStaticTranslations();
      renderCards();
      if (lightboxEl && lightboxEl.classList.contains("open")) {
        syncLightbox();
      }
    });
  });

  if (syncBtn) {
    syncBtn.addEventListener("click", syncGithubReleases);
  }

  if (lbPrev && lbNext) {
    lbPrev.addEventListener("click", () => {
      state.lightbox.index -= 1;
      syncLightbox();
    });
    lbNext.addEventListener("click", () => {
      state.lightbox.index += 1;
      syncLightbox();
    });
  }

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", closeModals);
  });

  [lightboxEl, installModalEl].filter(Boolean).forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModals();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModals();
    } else if (lightboxEl && lightboxEl.classList.contains("open")) {
      if (e.key === "ArrowLeft") {
        state.lightbox.index -= 1;
        syncLightbox();
      } else if (e.key === "ArrowRight") {
        state.lightbox.index += 1;
        syncLightbox();
      }
    }
  });

  if (imCopyBtn) {
    imCopyBtn.addEventListener("click", () => {
      copyText(imCode.textContent, imCopyBtn);
    });
  }

  document.querySelectorAll("[data-copy-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pre = document.getElementById(btn.dataset.copyTarget);
      if (pre) copyText(pre.textContent, btn);
    });
  });

  // Theme switcher
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("maprisma-site-theme") || "dark";
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("maprisma-site-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("maprisma-site-theme", "light");
      }
    });
  }

  applyStaticTranslations();
  renderCards();
})();
