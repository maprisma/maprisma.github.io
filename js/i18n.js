/**
 * Maprisma Website — UI Translations (English & Deutsch)
 */
window.MAPRISMA_I18N = {
  en: {
    pageTitle: "Maprisma — Local-First AI Agents, MCP & Linux Desktop Suite",
    brandBadge: "Open Source · Linux",
    navApps: "All Apps",
    navInstall: "Download & Install",
    navGithub: "GitHub Org ↗",
    themeLabel: "Theme",
    cornersLabel: "Corners",
    cornersRound: "Rounded corners",
    cornersSquare: "Square corners",
    eyebrow: "Built for COSMIC · KDE Plasma · Hyprland · Linux",
    heroTitleLead: "Your AI agents, local models & desktop tools — ",
    heroTitleAccent: "crafted as one family.",
    heroLead:
      "<strong>Maprisma</strong> brings local-first AI workflows and native desktop utilities together on Linux. Every app shares your desktop's colors and corners, respects your privacy, and can be downloaded and installed straight from GitHub.",
    ctaBrowse: "Browse All 13 Apps",
    ctaReleases: "Download Maprisma Releases",
    ctaInstall: "How to Install",
    statAppsLabel: "Apps, Applets & Add-ons",
    statDesktopsVal: "3 Desktops",
    statDesktopsLabel: "COSMIC, KDE Plasma & Hyprland",
    statVerifiedVal: "SHA-256 & Signed",
    statVerifiedLabel: "Verified Releases & Add-ons",
    statPrivacyVal: "Local-First",
    statPrivacyLabel: "No Cloud Lock-In or Telemetry",
    heroCaptionText: "Maprisma — Connect agents, local LLMs & MCP servers by drawing a line",
    heroCaptionAction: "⤢ Click to inspect",

    catAll: "All Apps",
    catAi: "AI & Voice",
    catDesktop: "Desktop Apps",
    catMonitors: "Panel Monitors",
    catShell: "Shell & Windowing",

    searchPlaceholder: "Search apps, features, local LLMs…",
    desktopAll: "All Desktops",
    desktopLinux: "Any Linux",
    syncVersionsBtn: "↻ Check GitHub Releases",
    syncVersionsLoading: "Checking GitHub…",
    syncVersionsDone: "✓ GitHub releases synced",
    syncVersionsRateLimit: "GitHub API limit reached — showing bundled versions",
    toolbarTip: "Tip: hover a screenshot to flip through slides, or click to enlarge.",
    showingAll: "Showing all {total} Maprisma apps",
    showingFiltered: "Showing {count} of {total} apps",
    emptyState: "No Maprisma apps match your current filter.",
    resetFilters: "Reset filters",

    enlargeBtn: "⤢ Enlarge",
    downloadInstallBtn: "Download & Install",
    githubBtn: "GitHub",
    releasesBtn: "Releases",

    installHeading: "Download & Install from GitHub",
    installSubheading:
      'Every Maprisma app lives in the <a href="https://github.com/maprisma" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">github.com/maprisma</a> organization. Maprisma and the windowed apps (Settings, Theme, Launcher, Playground) come as a ready-to-run AppImage, manage the whole suite via <strong>Maprisma Settings</strong>, or install any repository directly with its local installer script.',
    step1Title: "AppImage or Release Archive",
    step1Desc:
      "Maprisma, Maprisma Settings, Theme, Launcher and Playground have a portable <code>x86_64</code> AppImage and a release archive on each app's GitHub Releases page. Check the SHA-256 checksum, make the AppImage executable and start it. For Maprisma the archive is recommended (background local LLM service). Panel applets, tray icons and the shell are installed from source (step 3).",
    step2Title: "Manage Everything in Maprisma Settings",
    step2Desc:
      "Install <strong>Maprisma Settings</strong> once to install, update, and cleanly remove any Maprisma app — and place their panel applets or tray icons on COSMIC, KDE Plasma, and Hyprland.",
    step3Title: "Clone & Install Individual Apps",
    step3Desc:
      "Every Rust panel applet and Flutter app includes an idempotent installer (<code>./install.sh</code> or <code>./tools/install-local</code>) that installs cleanly into <code>~/.local</code> without touching system files.",

    copyBtn: "Copy",
    copiedBtn: "Copied ✓",
    modalInstallPrefix: "Install",
    modalDownloadRelease: "Download GitHub Release ↗",
    modalOpenRepo: "Open GitHub Repository ↗",

    footerTagline: "Created by Uwe Bruckhaus · Open-source Linux & AI desktop software (MIT)",
    footerCatalog: "App Catalog",
    footerInstall: "Install Guide",
    footerImprint: "Imprint (Impressum)",
    footerPrivacy: "Privacy (Datenschutz)"
  },

  de: {
    pageTitle: "Maprisma — Lokale KI-Agenten, MCP & Linux-Desktop-Suite",
    brandBadge: "Open Source · Linux",
    navApps: "Alle Apps",
    navInstall: "Download & Installation",
    navGithub: "GitHub-Org ↗",
    themeLabel: "Design",
    cornersLabel: "Ecken",
    cornersRound: "Abgerundete Ecken",
    cornersSquare: "Eckige Ecken",
    eyebrow: "Entwickelt für COSMIC · KDE Plasma · Hyprland · Linux",
    heroTitleLead: "Deine KI-Agenten, lokalen Modelle & Desktop-Tools — ",
    heroTitleAccent: "vereint in einer Familie.",
    heroLead:
      "<strong>Maprisma</strong> verbindet lokale KI-Workflows und native Desktop-Werkzeuge unter Linux. Jede App übernimmt automatisch Farben und Fensterecken deines Desktops, schützt deine Privatsphäre und lässt sich direkt von GitHub herunterladen und installieren.",
    ctaBrowse: "Alle 13 Apps entdecken",
    ctaReleases: "Maprisma Releases laden",
    ctaInstall: "Installationsanleitung",
    statAppsLabel: "Apps, Applets & Add-ons",
    statDesktopsVal: "3 Desktops",
    statDesktopsLabel: "COSMIC, KDE Plasma & Hyprland",
    statVerifiedVal: "SHA-256 & Signiert",
    statVerifiedLabel: "Geprüfte Releases & Add-ons",
    statPrivacyVal: "Local-First",
    statPrivacyLabel: "Kein Cloud-Zwang, keine Telemetrie",
    heroCaptionText: "Maprisma — Verbinde Agenten, lokale LLMs & MCP-Server einfach per Linie",
    heroCaptionAction: "⤢ Klicken zum Vergrößern",

    catAll: "Alle Apps",
    catAi: "KI & Sprache",
    catDesktop: "Desktop-Apps",
    catMonitors: "Panel-Monitore",
    catShell: "Shell & Fenster",

    searchPlaceholder: "Apps, Funktionen, lokale LLMs suchen…",
    desktopAll: "Alle Desktops",
    desktopLinux: "Jedes Linux",
    syncVersionsBtn: "↻ GitHub-Releases prüfen",
    syncVersionsLoading: "Prüfe GitHub…",
    syncVersionsDone: "✓ GitHub-Versionen aktuell",
    syncVersionsRateLimit: "GitHub-API-Limit erreicht — zeige hinterlegte Versionen",
    toolbarTip: "Tipp: Über ein Bild fahren zum Blättern oder klicken zum Vergrößern.",
    showingAll: "Alle {total} Maprisma-Apps werden angezeigt",
    showingFiltered: "{count} von {total} Apps werden angezeigt",
    emptyState: "Keine Maprisma-App entspricht dem aktuellen Filter.",
    resetFilters: "Filter zurücksetzen",

    enlargeBtn: "⤢ Vergrößern",
    downloadInstallBtn: "Download & Installieren",
    githubBtn: "GitHub",
    releasesBtn: "Releases",

    installHeading: "Download & Installation von GitHub",
    installSubheading:
      'Alle Maprisma-Apps sind unter <a href="https://github.com/maprisma" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">github.com/maprisma</a> verfügbar. Maprisma und die Fenster-Apps (Settings, Theme, Launcher, Playground) gibt es als startfertiges AppImage; verwalte alle Apps bequem über <strong>Maprisma Settings</strong> oder installiere einzelne Repositories direkt per Skript.',
    step1Title: "AppImage oder Release-Archiv",
    step1Desc:
      "Maprisma, Maprisma Settings, Theme, Launcher und Playground gibt es als portables <code>x86_64</code>-AppImage und als Release-Archiv auf der GitHub-Releases-Seite der jeweiligen App. Prüfe die SHA-256-Prüfsumme, mach das AppImage ausführbar und starte es. Für Maprisma wird das Archiv empfohlen (lokaler LLM-Hintergrunddienst). Panel-Applets, Tray-Icons und die Shell werden aus dem Quellcode installiert (Schritt 3).",
    step2Title: "Alles verwalten mit Maprisma Settings",
    step2Desc:
      "Installiere einmalig <strong>Maprisma Settings</strong>, um beliebige Maprisma-Apps per Klick zu installieren, zu aktualisieren, sauber zu entfernen und Leisten-Icons auf COSMIC, KDE Plasma & Hyprland zu platzieren.",
    step3Title: "Einzelne Apps klonen & installieren",
    step3Desc:
      "Jedes Rust-Panel-Applet und jede Flutter-App bringt ein sauberes Installationsskript (<code>./install.sh</code> bzw. <code>./tools/install-local</code>) für <code>~/.local</code> mit — ohne Systemdateien zu verändern.",

    copyBtn: "Kopieren",
    copiedBtn: "Kopiert ✓",
    modalInstallPrefix: "Installieren:",
    modalDownloadRelease: "GitHub-Release herunterladen ↗",
    modalOpenRepo: "GitHub-Repository öffnen ↗",

    footerTagline: "Entwickelt von Uwe Bruckhaus · Open-Source Linux- & KI-Desktop-Software (MIT)",
    footerCatalog: "App-Katalog",
    footerInstall: "Installation",
    footerImprint: "Impressum",
    footerPrivacy: "Datenschutz"
  }
};
