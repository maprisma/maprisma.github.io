/**
 * Maprisma App Catalog (Bilingual EN / DE + Real Repo Versions)
 * -------------------------------------------------------------
 * Edit this file to update app descriptions, versions, GitHub links,
 * install commands, or add new screenshots under `assets/screenshots/`.
 */
window.MAPRISMA_APPS = [
  {
    id: "maprisma",
    name: "Maprisma",
    version: "v0.14.6",
    repoSlug: "maprisma/maprisma",
    tagline: "Your AI agents, local LLMs, models & MCP tools on one visual map",
    tagline_de: "Deine KI-Agenten, lokalen LLMs, Modelle & MCP-Tools auf einer Karte",
    description:
      "See and connect your entire local and cloud AI setup on one interactive map. Draw a line to wire coding agents (Claude Code, Codex, Copilot, Gemini, Antigravity, OpenCode, Pi) to local LLMs (llama.cpp, Ollama, LM Studio, vLLM), MCP servers, and skill folders — with SHA-256 verified installs, security checks, and full Undo.",
    description_de:
      "Sieh und verbinde dein gesamtes lokales und Cloud-KI-Setup auf einer interaktiven Karte. Ziehe einfach eine Linie, um Coding-Agenten (Claude Code, Codex, Copilot, Gemini, Antigravity, OpenCode, Pi) mit lokalen LLMs (llama.cpp, Ollama, LM Studio, vLLM), MCP-Servern und Skill-Ordnern zu verknüpfen — inklusive SHA-256-Prüfung, Sicherheitscheck und Rückgängig-Funktion.",
    category: "ai",
    categoryLabel: "AI & Voice",
    categoryLabel_de: "KI & Sprache",
    featured: true,
    tech: "Flutter · Dart",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland", "Linux"],
    icon: "assets/icons/maprisma.svg",
    github: "https://github.com/maprisma/maprisma",
    releases: "https://github.com/maprisma/maprisma/releases",
    installCmd:
      "# Download the latest release archive from GitHub Releases, verify & install:\nsha256sum -c maprisma-*-x86_64.tar.gz.sha256\ntar -xzf maprisma-*-x86_64.tar.gz && cd maprisma-*\n./install.sh",
    highlights: [
      "Draw-to-connect map with live preview & Undo",
      "SHA-256 verified local LLM & GGUF downloads",
      "Agent health, permissions & security check"
    ],
    highlights_de: [
      "Verbinden per Linie mit Vorschau & Undo",
      "SHA-256-geprüfte lokale LLM- & Modell-Downloads",
      "Berechtigungs- & Sicherheitscheck pro Agent"
    ],
    screenshots: [
      {
        src: "assets/screenshots/maprisma-map.webp",
        caption: "Visual map connecting MCP servers, coding agents, providers, and local models",
        caption_de: "Visuelle Karte für MCP-Server, Coding-Agenten, Anbieter und lokale Modelle"
      },
      {
        src: "assets/screenshots/maprisma-demo.gif",
        caption: "Animated demo: wire an agent to a local LLM, model, MCP server, and skill folder",
        caption_de: "Animierte Demo: Agent per Linie mit lokalem LLM, Modell, MCP-Server und Skills verbinden"
      },
      {
        src: "assets/screenshots/maprisma-connect.webp",
        caption: "Preview every connection before applying, with one-click Undo",
        caption_de: "Jede Änderung vorab prüfen und jederzeit mit einem Klick rückgängig machen"
      },
      {
        src: "assets/screenshots/maprisma-ask-ai.webp",
        caption: "Ask AI assistant: configure MCP servers and skills through reviewed proposals",
        caption_de: "Ask-AI-Assistent: MCP-Server und Skills über geprüfte Vorschläge einrichten"
      }
    ]
  },
  {
    id: "settings",
    name: "Maprisma Settings",
    version: "v0.4.1",
    repoSlug: "maprisma/settings",
    tagline: "Install, update, remove Maprisma apps & place their bar icons",
    tagline_de: "Maprisma-Apps installieren, aktualisieren, entfernen & Leisten-Icons platzieren",
    description:
      "The central app manager and control hub for the Maprisma family. Install, update, and cleanly remove any Maprisma app, place or reorder panel/tray icons on COSMIC, KDE Plasma, and Maprisma Shell, and configure shared Ask AI permissions, Voice, and Notifications.",
    description_de:
      "Die zentrale Verwaltung für alle Maprisma-Apps. Installiere, aktualisiere und entferne Maprisma-Anwendungen sauber per Klick, platziere Leisten- und Tray-Symbole unter COSMIC, KDE Plasma und Maprisma Shell und steuere gemeinsame Ask-AI-Regeln, Spracheingabe und Benachrichtigungen.",
    category: "desktop",
    categoryLabel: "Desktop Apps",
    categoryLabel_de: "Desktop-Apps",
    featured: true,
    tech: "Flutter · Dart · Rust",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland", "Linux"],
    icon: "assets/icons/settings.svg",
    github: "https://github.com/maprisma/settings",
    releases: "https://github.com/maprisma/settings/releases",
    installCmd:
      "git clone https://github.com/maprisma/settings.git maprisma-settings\ncd maprisma-settings\n./tools/install-local",
    highlights: [
      "One-click install & atomic updates across 18 apps",
      "Panel & system tray icon placement",
      "Shared Ask AI safety rules & action audit log"
    ],
    highlights_de: [
      "1-Klick-Installation & atomare Updates für 18 Apps",
      "Leisten- und System-Tray-Icons direkt platzieren",
      "Gemeinsame Ask-AI-Sicherheitsregeln & Aktionsprotokoll"
    ],
    screenshots: [
      {
        src: "assets/screenshots/settings-preview.svg",
        caption: "Manage installed Maprisma apps, updates, bar icons, and Ask AI rules",
        caption_de: "Installierte Maprisma-Apps, Updates, Leisten-Icons und Ask-AI-Regeln verwalten"
      }
    ]
  },
  {
    id: "launcher",
    name: "Maprisma Launcher",
    version: "v0.2.0",
    repoSlug: "maprisma/launcher",
    tagline: "Theme-aware app launcher, AI package advisor, live shortcut map & dock",
    tagline_de: "Theme-passender App-Starter, KI-Paketberater, Live-Tastenkarte & Dock",
    description:
      "Launch apps, switch windows, organize custom groups, and bind global shortcuts with an owner-colored live keyboard map. Includes an optional layer-shell dock, 3D workspace cube view, and Ask AI package recommendations powered by cloud agents or local LLMs.",
    description_de:
      "Starte Apps, wechsle Fenster, organisiere eigene Gruppen und vergib globale Tastenkürzel auf einer farbcodierten Live-Tastaturkarte. Mit optionalem Wayland-Dock, 3D-Würfelansicht und Ask-AI-Paketempfehlungen über lokale LLMs oder Coding-Agenten.",
    category: "desktop",
    categoryLabel: "Desktop Apps",
    categoryLabel_de: "Desktop-Apps",
    featured: true,
    tech: "Flutter · Rust",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/launcher.svg",
    github: "https://github.com/maprisma/launcher",
    releases: "https://github.com/maprisma/launcher/releases",
    installCmd:
      "git clone https://github.com/maprisma/launcher.git maprisma-launcher\ncd maprisma-launcher\n./tools/install-local",
    highlights: [
      "App groups, window switcher & optional dock",
      "Live owner-colored global shortcut keyboard map",
      "Ask AI package advisor in 8 languages"
    ],
    highlights_de: [
      "App-Gruppen, Fensterwechsler & optionales Dock",
      "Farbcodierte Live-Tastaturkarte für globale Shortcuts",
      "Ask-AI-Softwareberater in 8 Sprachen"
    ],
    screenshots: [
      {
        src: "assets/screenshots/launcher-grid.webp",
        caption: "Grouped app cards with rich window actions, floating launch, and shortcut menu",
        caption_de: "Gruppierte App-Karten mit Fensteraktionen, Floating-Start und Shortcut-Menü"
      },
      {
        src: "assets/screenshots/launcher-ask-ai.webp",
        caption: "Ask AI software advisor running locally on Ollama / llama.cpp or cloud agents",
        caption_de: "Ask-AI-Paketberater lokal mit Ollama / llama.cpp oder Cloud-Agenten"
      },
      {
        src: "assets/screenshots/launcher-keys.webp",
        caption: "Owner-colored live keyboard shortcut map with conflict-free rebinding",
        caption_de: "Farbcodierte Live-Tastenkarte für konfliktfreies Umbelegen von Shortcuts"
      },
      {
        src: "assets/screenshots/launcher-cube.webp",
        caption: "3D cube view and optional Wayland layer-shell dock",
        caption_de: "3D-Würfelansicht und optionales Wayland-Layer-Shell-Dock"
      },
      {
        src: "assets/screenshots/launcher-dock.webp",
        caption: "Minimal bottom dock with pinned apps and quick desktop actions",
        caption_de: "Schlankes Dock mit angehefteten Apps und Desktop-Schnellaktionen"
      }
    ]
  },
  {
    id: "theme",
    name: "Maprisma Theme",
    version: "v0.5.0",
    repoSlug: "maprisma/theme",
    tagline: "Unified theme manager, custom palette builder & workspace presets",
    tagline_de: "Theme-Manager, eigener Farbpaletten-Editor & Workspace-Layouts",
    description:
      "Every desktop theme in one keyboard-first gallery for COSMIC, KDE Plasma, and Hyprland. Create themes from any wallpaper, assign day/night schedules or per-workspace themes, configure fonts and blur, or ask a coding agent / local model to design a new palette.",
    description_de:
      "Alle Desktop-Themes an einem Ort für COSMIC, KDE Plasma und Hyprland. Erstelle eigene Themes aus jedem Hintergrundbild, nutze Tag-/Nacht-Automatik oder Themes pro Arbeitsfläche, passe Schriften und Unschärfe an oder lass dir per Ask AI ein neues Theme entwerfen.",
    category: "desktop",
    categoryLabel: "Desktop Apps",
    categoryLabel_de: "Desktop-Apps",
    featured: true,
    tech: "Flutter · Rust",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/theme.svg",
    github: "https://github.com/maprisma/theme",
    releases: "https://github.com/maprisma/theme/releases",
    installCmd:
      "git clone https://github.com/maprisma/theme.git maprisma-theme\ncd maprisma-theme\n./tools/install-local",
    highlights: [
      "Syncs desktop, terminal & editor colors (colors.toml)",
      "Generate themes from pictures or via Ask AI",
      "Drag-and-drop workspace layout presets"
    ],
    highlights_de: [
      "Synchronisiert Desktop-, Terminal- & Editor-Farben (colors.toml)",
      "Themes aus Bildern oder per Ask AI generieren",
      "Workspace-Layouts bequem per Drag & Drop festlegen"
    ],
    screenshots: [
      {
        src: "assets/screenshots/theme-gallery.webp",
        caption: "Keyboard-first theme gallery with live desktop previews and favorites",
        caption_de: "Schnelle Theme-Galerie mit Live-Desktopvorschau und Favoriten"
      },
      {
        src: "assets/screenshots/theme-ask-ai.webp",
        caption: "Ask AI theme designer using local models or coding agents",
        caption_de: "Ask-AI-Theme-Designer mit lokalen Modellen oder Coding-Agenten"
      },
      {
        src: "assets/screenshots/theme-presets.webp",
        caption: "Per-workspace window limits and tiling layout presets",
        caption_de: "Fensterlimits und Tiling-Layouts pro Arbeitsfläche"
      },
      {
        src: "assets/screenshots/theme-tokyo-night.webp",
        caption: "Sample coordinated Tokyo Night desktop theme preview",
        caption_de: "Beispielvorschau des abgestimmten Tokyo-Night-Themes"
      }
    ]
  },
  {
    id: "playground",
    name: "Maprisma Playground",
    version: "v0.2.3",
    repoSlug: "maprisma/playground",
    tagline: "Benchmark, pit head-to-head, and play chess with your AI agents & LLMs",
    tagline_de: "KI-Agenten & lokale LLMs testen, blind vergleichen und im Schach fordern",
    description:
      "Test what the AI agents and local models on your PC can really do — one experiment per tab. Compare speed and token cost side-by-side, judge blind head-to-head answers, play chess against agents, test vision models, or generate images locally via Vulkan.",
    description_de:
      "Probiere aus, was die KI-Agenten und lokalen Modelle auf deinem PC leisten — ein Experiment pro Tab. Vergleiche Geschwindigkeit und Kosten direkt nebeneinander, bewerte Antworten im Blindvergleich, spiele Schach gegen Agenten, teste Bilderkennung oder generiere Bilder lokal per Vulkan.",
    category: "ai",
    categoryLabel: "AI & Voice",
    categoryLabel_de: "KI & Sprache",
    featured: true,
    tech: "Flutter · Rust",
    desktops: ["COSMIC", "KDE Plasma", "Linux"],
    icon: "assets/icons/playground.svg",
    github: "https://github.com/maprisma/playground",
    releases: "https://github.com/maprisma/playground/releases",
    installCmd:
      "git clone https://github.com/maprisma/playground.git maprisma-playground\ncd maprisma-playground\n./tools/install-local",
    highlights: [
      "Speed, token & cost benchmarks across agents",
      "Blind head-to-head judging & agent Chess",
      "Local Vulkan image generation (stable-diffusion.cpp)"
    ],
    highlights_de: [
      "Geschwindigkeits-, Token- & Kostenvergleich",
      "Blind-Duell-Bewertung & Agenten-Schach",
      "Lokale Vulkan-Bildgenerierung (stable-diffusion.cpp)"
    ],
    screenshots: [
      {
        src: "assets/screenshots/playground-chess.webp",
        caption: "Play chess against local LLMs or coding agents, or watch two agents play",
        caption_de: "Schach gegen lokale LLMs oder Coding-Agenten — oder Agent gegen Agent"
      },
      {
        src: "assets/screenshots/playground-speed.webp",
        caption: "Run identical prompts across multiple agents and local models to compare speed & cost",
        caption_de: "Gleiche Aufgabe an mehrere Agenten & lokale Modelle senden: Tempo & Kosten im Vergleich"
      },
      {
        src: "assets/screenshots/playground-automaton.webp",
        caption: "Interactive cellular automaton playground tab",
        caption_de: "Interaktiver Zellulärer-Automat-Tab"
      },
      {
        src: "assets/screenshots/playground-generate.webp",
        caption: "100% local text-to-image generation on your GPU with SHA-256 verified weights",
        caption_de: "100 % lokale Bildgenerierung auf deiner Grafikkarte mit SHA-256-geprüften Modellen"
      }
    ]
  },
  {
    id: "mail",
    name: "Maprisma Mail",
    version: "v0.1.0",
    repoSlug: "maprisma/mail",
    tagline: "Fast, keyboard-driven IMAP & JMAP mail client with native desktop styling",
    tagline_de: "Schnelles, tastaturfreundliches IMAP- & JMAP-Mailprogramm im Desktop-Look",
    description:
      "A clean, privacy-first Linux mail client built in Flutter on top of the Rust omamail engine. Supports Gmail, Fastmail (JMAP), iCloud, t-online, and any IMAP/SMTP server with remote image blocking, conversation threads, Vim-style keys, and automatic desktop theme matching.",
    description_de:
      "Ein schlankes, datenschutzfreundliches Mail-Programm für Linux in Flutter auf Basis der Rust-Engine omamail. Unterstützt Gmail, Fastmail (JMAP), iCloud, t-online.de sowie beliebige IMAP/SMTP-Konten mit Nachlade-Schutz für Bilder, Konversationsansicht, schnellen Tasten und Desktop-Farben.",
    category: "desktop",
    categoryLabel: "Desktop Apps",
    categoryLabel_de: "Desktop-Apps",
    featured: true,
    tech: "Flutter · Rust (omamail)",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/mail.svg",
    github: "https://github.com/maprisma/mail",
    releases: "https://github.com/maprisma/mail/releases",
    installCmd:
      "git clone https://github.com/maprisma/mail.git maprisma-mail\ncd maprisma-mail\n./tools/install-local",
    highlights: [
      "IMAP/SMTP & Fastmail JMAP via Rust backend",
      "Remote tracker & image blocking by default",
      "Full keyboard navigation (j/k, e, r, c, ?)"
    ],
    highlights_de: [
      "IMAP/SMTP & Fastmail JMAP über schnelles Rust-Backend",
      "Externe Bilder & Tracker standardmäßig blockiert",
      "Komplette Tastatursteuerung (j/k, e, r, c, ?)"
    ],
    screenshots: [
      {
        src: "assets/screenshots/mail-inbox-dark.webp",
        caption: "Three-pane dark inbox with keyboard shortcuts and multi-account rail",
        caption_de: "Übersichtlicher Posteingang im dunklen Design mit Tastenkürzeln und Kontenleiste"
      },
      {
        src: "assets/screenshots/mail-reader.webp",
        caption: "Clean conversation reader with blocked remote images banner",
        caption_de: "Konversationsansicht mit Schutz vor extern nachgeladenen Bildern"
      },
      {
        src: "assets/screenshots/mail-compose.webp",
        caption: "Distraction-free reply composer",
        caption_de: "Aufgeräumtes Antwort- und Verfassen-Fenster"
      },
      {
        src: "assets/screenshots/mail-inbox-light.webp",
        caption: "Automatic light theme adaptation matching your desktop colors",
        caption_de: "Automatische Anpassung an helle Desktop-Farbschemata"
      }
    ]
  },
  {
    id: "dictation",
    name: "Maprisma Dictation",
    version: "v0.1.0",
    repoSlug: "maprisma/dictation",
    tagline: "Local Vulkan Whisper voice service & top-center AI voice overlay",
    tagline_de: "Lokaler Vulkan-Sprachdienst & KI-Sprach-Overlay am oberen Bildschirmrand",
    description:
      "One shared D-Bus voice service (`com.maprisma.Voice1`) for every Maprisma app plus a sleek top-center aura pill overlay. Speaks and transcribes locally on your GPU via whisper.cpp + Vulkan, answers questions via your chosen AI helper, and performs reviewed desktop actions.",
    description_de:
      "Ein gemeinsamer D-Bus-Sprachdienst (`com.maprisma.Voice1`) für alle Maprisma-Apps samt schwebendem Aura-Overlay. Transkribiert Sprache lokal auf deiner GPU per whisper.cpp + Vulkan, beantwortet Fragen mit deinem gewählten KI-Helfer und führt Desktop-Aktionen kontrolliert aus.",
    category: "ai",
    categoryLabel: "AI & Voice",
    categoryLabel_de: "KI & Sprache",
    featured: false,
    tech: "Rust · whisper.cpp (Vulkan)",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/dictation.svg",
    github: "https://github.com/maprisma/dictation",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/dictation.git maprisma-dictation\ncd maprisma-dictation\n./install.sh",
    highlights: [
      "Offline GPU speech-to-text kept warm in VRAM",
      "Aura ring overlay toggled by shortcut or bar icon",
      "Voice commands for apps, workspaces, media & DND"
    ],
    highlights_de: [
      "Offline-Spracherkennung auf der GPU (sofort startklar im VRAM)",
      "Aura-Overlay per Tastendruck oder Leisten-Icon",
      "Sprachbefehle für Apps, Arbeitsflächen, Medien & Nicht stören"
    ],
    screenshots: [
      {
        src: "assets/screenshots/dictation-preview.svg",
        caption: "Top-center aura voice pill and session D-Bus voice service",
        caption_de: "Schwebendes Sprach-Overlay mit Aura-Ring und lokalem D-Bus-Sprachdienst"
      }
    ]
  },
  {
    id: "video-translator",
    name: "Maprisma Video Translator",
    version: "v1.1.0",
    repoSlug: "maprisma/video-translator",
    tagline: "Live translated captions floating above any fullscreen video or call",
    tagline_de: "Live übersetzte Untertitel über jedem Vollbild-Video, Stream oder Anruf",
    description:
      "Real-time subtitles over any video, stream, meeting, or microphone. Whisper recognizes speech locally on your machine while your own llama.cpp / Ollama server (or compatible API) translates it into a movable Wayland overlay that stays above fullscreen windows.",
    description_de:
      "Echtzeit-Untertitel über jedem Video, Stream, Meeting oder Mikrofon. Whisper erkennt die Sprache lokal auf deinem PC, während dein eigener llama.cpp- oder Ollama-Server (oder eine kompatible API) sie live übersetzt — frei verschiebbar auch über Vollbild-Videos.",
    category: "ai",
    categoryLabel: "AI & Voice",
    categoryLabel_de: "KI & Sprache",
    featured: false,
    tech: "Rust · Flutter · Python",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/video.svg",
    github: "https://github.com/maprisma/video-translator",
    releases: "https://github.com/maprisma/video-translator/releases",
    installCmd:
      "git clone https://github.com/maprisma/video-translator.git maprisma-video-translator\ncd maprisma-video-translator\n./install.sh",
    highlights: [
      "wlr-layer-shell caption overlay above fullscreen",
      "Local Whisper ASR + llama.cpp / Ollama translation",
      "COSMIC applet, KDE tray & Flutter settings window"
    ],
    highlights_de: [
      "Untertitel-Overlay bleibt sichtbar über Vollbild-Videos",
      "Lokales Whisper + Übersetzung via llama.cpp / Ollama",
      "COSMIC-Applet, KDE-Tray & Flutter-Einstellungsfenster"
    ],
    screenshots: [
      {
        src: "assets/screenshots/video-preview.svg",
        caption: "Movable live translated subtitles overlay over fullscreen video",
        caption_de: "Frei bewegliches Live-Untertitel-Overlay über Vollbild-Videos"
      }
    ]
  },
  {
    id: "narrator",
    name: "Maprisma Narrator",
    version: "v1.1.0",
    repoSlug: "maprisma/narrator",
    tagline: "Read any window, PDF, or Kindle page aloud — and translate it on the fly",
    tagline_de: "Jedes Fenster, PDF oder Kindle-Buch vorlesen lassen — auf Wunsch direkt übersetzt",
    description:
      "Extracts text from any window or screen region using local Tesseract OCR, highlights the active passage live on screen, and reads it aloud with natural offline voices (Kokoro or Piper) in 51 languages — optionally translating pages first via local LLMs or NLLB-200.",
    description_de:
      "Erkennt den Text beliebiger Fenster oder Bildschirmbereiche per lokalem OCR (Tesseract), hebt den aktuellen Abschnitt live hervor und liest ihn mit natürlichen lokalen Stimmen (Kokoro oder Piper) in 51 Sprachen vor — auf Wunsch inklusive Live-Übersetzung.",
    category: "ai",
    categoryLabel: "AI & Voice",
    categoryLabel_de: "KI & Sprache",
    featured: false,
    tech: "Rust · Flutter · Python",
    desktops: ["COSMIC", "KDE Plasma"],
    icon: "assets/icons/narrator.svg",
    github: "https://github.com/maprisma/narrator",
    releases: "https://github.com/maprisma/narrator/releases",
    installCmd:
      "git clone https://github.com/maprisma/narrator.git maprisma-narrator\ncd maprisma-narrator\n./install.sh",
    highlights: [
      "Local OCR + live on-screen passage highlighting",
      "Offline Kokoro & Piper neural voices (51 languages)",
      "Speak-in translation + automatic page turning"
    ],
    highlights_de: [
      "Lokales OCR + Live-Hervorhebung der gelesenen Stelle",
      "Natürliche Offline-Stimmen mit Kokoro & Piper (51 Sprachen)",
      "Direktübersetzung beim Vorlesen & automatisches Umblättern"
    ],
    screenshots: [
      {
        src: "assets/screenshots/narrator-preview.svg",
        caption: "Live OCR passage highlight with offline neural TTS and real-time translation",
        caption_de: "Live-Texthervorhebung mit lokaler Sprachausgabe und Übersetzung"
      }
    ]
  },
  {
    id: "llm-monitor",
    name: "Maprisma LLM Monitor",
    version: "v0.2.0",
    repoSlug: "maprisma/llm-monitor",
    tagline: "Live GPU VRAM, context fill & tok/s panel applet for local LLMs",
    tagline_de: "GPU-Speicher, Kontext-Füllstand & Tok/s lokaler LLMs direkt in der Leiste",
    description:
      "See at a glance from your desktop bar when llama.cpp, Ollama, LM Studio, or vLLM is holding GPU memory, how full its context window is (green-to-red bar), live tokens/sec, which agent is using it, and free GPU VRAM with a single click.",
    description_de:
      "Sieh auf einen Blick in der Leiste, wann llama.cpp, Ollama, LM Studio oder vLLM Grafikkartenspeicher belegen, wie voll das Kontextfenster ist (Grün-bis-Rot-Balken), wie schnell Tokens generiert werden, welcher Agent das Modell nutzt — plus 1-Klick-VRAM-Freigabe.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic) · Python",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/llm.svg",
    github: "https://github.com/maprisma/llm-monitor",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/llm-monitor.git maprisma-llm-monitor\ncd maprisma-llm-monitor\n./install.sh",
    highlights: [
      "Live VRAM split: LLM vs. desktop vs. free memory",
      "Context & output buffer fill + live tok/s",
      "One-click Free GPU Memory action"
    ],
    highlights_de: [
      "VRAM-Aufteilung: Modelle vs. Desktop vs. frei",
      "Kontext-Füllstand & Live-Geschwindigkeit in Tok/s",
      "GPU-Speicher mit einem Klick freigeben"
    ],
    screenshots: [
      {
        src: "assets/screenshots/llm-monitor.webp",
        caption: "Detailed GPU VRAM, context buffer fill, tokens/sec, and active runtime breakdown",
        caption_de: "Detailansicht zu GPU-Speicher, Kontextpuffer, Tok/s und aktiven LLM-Diensten"
      }
    ]
  },
  {
    id: "wlan-monitor",
    name: "Maprisma WLAN Monitor",
    version: "v0.2.0",
    repoSlug: "maprisma/wlan-monitor",
    tagline: "See who is on your Wi-Fi in plain words, right from the panel",
    tagline_de: "Im Klartext sehen, wer in deinem WLAN ist — direkt aus der Leiste",
    description:
      "A radar icon in your panel that shows Wi-Fi signal quality in plain words, live throughput, VPN reachability warnings, and every device on your network grouped by Wi-Fi band or platform — with instant alerts when an unknown device joins.",
    description_de:
      "Ein Radar-Icon in deiner Leiste zeigt Signalqualität in klaren Worten, Live-Durchsatz, VPN-Hinweise für dein Heimnetz und alle verbundenen Geräte gruppiert nach Frequenzband oder Hersteller — samt Warnpunkt bei neuen Geräten.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic) · Python",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/wlan.svg",
    github: "https://github.com/maprisma/wlan-monitor",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/wlan-monitor.git maprisma-wlan-monitor\ncd maprisma-wlan-monitor\n./install.sh",
    highlights: [
      "Device list & interactive Wi-Fi band tree map",
      "VPN local-network block detection & FRITZ!Box mesh info",
      "Red badge alert when a new device joins"
    ],
    highlights_de: [
      "Geräteliste & Netzwerkkarte nach WLAN-Bändern",
      "VPN-Heimnetz-Prüfung & FRITZ!Box-Mesh-Details",
      "Sofort-Hinweis, wenn ein neues Gerät beitritt"
    ],
    screenshots: [
      {
        src: "assets/screenshots/wlan-devices.webp",
        caption: "Connected devices grouped by platform with signal quality and VPN check",
        caption_de: "Verbundene Geräte nach Plattform gruppiert inklusive Signalstärke & VPN-Check"
      },
      {
        src: "assets/screenshots/wlan-map.webp",
        caption: "Network topology map organized by 6 GHz, 5 GHz, 2.4 GHz, and LAN",
        caption_de: "Netzwerkkarte aufgeteilt nach 6 GHz, 5 GHz, 2,4 GHz und LAN"
      }
    ]
  },
  {
    id: "bluetooth-monitor",
    name: "Maprisma Bluetooth Monitor",
    version: "v0.2.0",
    repoSlug: "maprisma/bluetooth-monitor",
    tagline: "Every wireless device, dongle & battery level mapped in your panel",
    tagline_de: "Alle Funkgeräte, USB-Dongles & Akkustände übersichtlich im Panel",
    description:
      "Tracks batteries and connections across Bluetooth adapters and Logitech Unifying, Bolt, Nano, and Lightspeed dongles. The panel icon shifts color or morphs into the device needing a charge, and the popup includes full Bluetooth scanning and pairing.",
    description_de:
      "Überwacht Akkustände und Verbindungen über Bluetooth-Adapter sowie Logitech Unifying-, Bolt-, Nano- und Lightspeed-Empfänger hinweg. Das Leisten-Icon warnt farblich bei schwachem Akku, und das Popup bietet direktes Bluetooth-Koppeln.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic) · Python",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/bluetooth.svg",
    github: "https://github.com/maprisma/bluetooth-monitor",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/bluetooth-monitor.git maprisma-bluetooth-monitor\ncd maprisma-bluetooth-monitor\n./install.sh",
    highlights: [
      "Visual map of PC, USB receivers & Bluetooth adapters",
      "Low/critical battery warnings right on the bar icon",
      "Built-in Bluetooth scan, pair, connect & audio switch"
    ],
    highlights_de: [
      "Verbindungskarte für PC, USB-Dongles & Bluetooth-Adapter",
      "Akku-Warnfarben direkt am Leisten-Icon",
      "Integriertes Suchen, Koppeln & Verbinden von Geräten"
    ],
    screenshots: [
      {
        src: "assets/screenshots/bluetooth-map.webp",
        caption: "Connection map of USB Bolt/Unifying dongles, adapters, and device batteries",
        caption_de: "Verbindungskarte aller Bolt-/Unifying-Empfänger, Adapter und Akkustände"
      },
      {
        src: "assets/screenshots/bluetooth-pair.webp",
        caption: "Integrated Bluetooth pairing and connection management",
        caption_de: "Direkte Bluetooth-Kopplung und Verbindungsverwaltung im Panel"
      }
    ]
  },
  {
    id: "hue-lights",
    name: "Maprisma Hue Lights",
    version: "v0.2.0",
    repoSlug: "maprisma/hue-lights",
    tagline: "Local-only Philips Hue rooms, zones, dimmers & scenes in the panel",
    tagline_de: "Philips Hue Räume, Zonen, Dimmer & Szenen lokal aus der Leiste steuern",
    description:
      "Control Philips Hue rooms, zones, individual bulbs, and scenes straight from a native panel applet or tray menu. Communicates strictly over local HTTPS with pinned bridge certificates — zero cloud account required, translated into 8 languages.",
    description_de:
      "Steuere Philips-Hue-Räume, Zonen, einzelne Lampen und Szenen direkt über dein Panel oder Tray. Kommuniziert ausschließlich lokal per HTTPS mit deiner Hue Bridge — komplett ohne Cloud-Konto und in 8 Sprachen übersetzt.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic) · Python",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/hue.svg",
    github: "https://github.com/maprisma/hue-lights",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/hue-lights.git maprisma-hue-lights\ncd maprisma-hue-lights\n./install.sh",
    highlights: [
      "Room & zone cards glowing in their live light color",
      "Right-click panel bulb to switch all lights off",
      "100% local HTTPS to bridge · 8 UI languages"
    ],
    highlights_de: [
      "Raum- & Zonenkarten leuchten in ihrer aktuellen Lichtfarbe",
      "Rechtsklick auf das Icon schaltet alle Lichter aus",
      "100 % lokal über deine Bridge · 8 Oberflächensprachen"
    ],
    screenshots: [
      {
        src: "assets/screenshots/hue-rooms.webp",
        caption: "Room and zone brightness cards with live status count",
        caption_de: "Raum- und Zonenkarten mit Helligkeitsreglern und Live-Status"
      },
      {
        src: "assets/screenshots/hue-scenes.webp",
        caption: "Expanded room card with individual light sliders and one-click scenes",
        caption_de: "Aufgeklappter Raum mit Einzellampen und Szenenauswahl"
      }
    ]
  },
  {
    id: "notifier",
    name: "Maprisma Notifier",
    version: "v0.1.0",
    repoSlug: "maprisma/notifier",
    tagline: "Persistent notification history, unread badge & scheduled Do Not Disturb",
    tagline_de: "Benachrichtigungsverlauf, Ungelesen-Zähler & zeitgesteuertes Nicht stören",
    description:
      "A lightweight notification center for COSMIC, KDE Plasma, and Hyprland. Keeps your desktop's native popups intact while recording a searchable, per-app grouped notification history with unread counts and manual or scheduled Do Not Disturb.",
    description_de:
      "Eine schlanke Benachrichtigungszentrale für COSMIC, KDE Plasma und Hyprland. Die nativen Desktop-Popups bleiben erhalten, während Maprisma Notifier alle Meldungen nach App gruppiert speichert — inklusive Ungelesen-Zähler und Nicht-stören-Zeitplan.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic)",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/notifier.svg",
    github: "https://github.com/maprisma/notifier",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/notifier.git maprisma-notifier\ncd maprisma-notifier\n./install.sh",
    highlights: [
      "History grouped by app with critical/unread markers",
      "Works alongside native COSMIC, Plasma & Shell popups",
      "One-click or scheduled Do Not Disturb"
    ],
    highlights_de: [
      "Verlauf übersichtlich nach Apps gruppiert",
      "Ergänzt native Popups von COSMIC, Plasma & Shell",
      "Nicht stören per Schalter oder festem Zeitplan"
    ],
    screenshots: [
      {
        src: "assets/screenshots/notifier-preview.svg",
        caption: "Grouped notification history popup with unread counts and Do Not Disturb schedule",
        caption_de: "Gruppierter Benachrichtigungsverlauf mit Ungelesen-Zähler und Nicht-stören-Zeitplan"
      }
    ]
  },
  {
    id: "control",
    name: "Maprisma Control",
    version: "v0.2.1",
    repoSlug: "maprisma/control",
    tagline: "Start, stop & monitor the Maprisma service from your panel or tray",
    tagline_de: "Maprisma direkt aus dem COSMIC-Panel oder KDE-/Hyprland-Tray starten & steuern",
    description:
      "Companion panel applet for COSMIC and StatusNotifierItem tray icon for KDE Plasma and Hyprland. Glows green while Maprisma is running, automatically discovers archive installs, system packages, or AppImages, and supports F12 diagnostic screenshots.",
    description_de:
      "Begleit-Applet für das COSMIC-Panel sowie Tray-Icon für KDE Plasma und Hyprland. Leuchtet grün, solange Maprisma läuft, findet automatisch Archiv-Installationen, Systempakete oder AppImages und bietet lokale F12-Diagnose-Screenshots.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic · zbus)",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/control.svg",
    github: "https://github.com/maprisma/control",
    releases: "https://github.com/maprisma/control/releases",
    installCmd:
      "git clone https://github.com/maprisma/control.git maprisma-applet\ncd maprisma-applet\n./install.sh",
    highlights: [
      "Live green robot indicator when Maprisma runs",
      "Finds ~/.local, /opt, package & AppImage installs",
      "Private local F12 popup screenshot + note tool"
    ],
    highlights_de: [
      "Grünes Roboter-Symbol zeigt laufendes Maprisma",
      "Erkennt ~/.local, /opt, Pakete & AppImages automatisch",
      "Lokaler F12-Popup-Screenshot mit Notizfunktion"
    ],
    screenshots: [
      {
        src: "assets/screenshots/control-preview.svg",
        caption: "Panel popup controlling Maprisma start, stop, and window visibility",
        caption_de: "Panel-Popup zum Starten, Stoppen und Öffnen von Maprisma"
      }
    ]
  },
  {
    id: "home",
    name: "Maprisma Home",
    version: "v0.2.0",
    repoSlug: null,
    tagline: "Local SwitchBot BLE climate meters & LAN pellet stove control",
    tagline_de: "Lokale SwitchBot-BLE-Thermometer & LAN-Pelletofen-Steuerung im Panel",
    description:
      "Reads room temperature and humidity directly from SwitchBot Bluetooth LE advertisements (no pairing, no cloud) and controls JUSTUS/Oranier pellet stoves over your local Wi-Fi module right from the COSMIC panel or KDE/Hyprland tray.",
    description_de:
      "Liest Raumtemperatur und Luftfeuchtigkeit direkt aus Bluetooth-LE-Signalen von SwitchBot-Messgeräten (ohne Cloud, ohne Kopplung) und steuert JUSTUS-/Oranier-Pelletöfen lokal im Heimnetz direkt über das Panel.",
    category: "monitors",
    categoryLabel: "Panel Monitors",
    categoryLabel_de: "Panel-Monitore",
    featured: false,
    tech: "Rust (libcosmic) · Python",
    desktops: ["COSMIC", "KDE Plasma", "Hyprland"],
    icon: "assets/icons/home.svg",
    github: "https://github.com/maprisma",
    releases: null,
    installCmd:
      "# Clone from the Maprisma GitHub organization once published:\ngit clone https://github.com/maprisma/home.git maprisma-home\ncd maprisma-home && ./install.sh",
    highlights: [
      "Zero-cloud SwitchBot BLE thermo-hygrometer scanner",
      "Local LAN pellet stove state, target temp & error reset",
      "Live temperature readout next to the flame icon"
    ],
    highlights_de: [
      "SwitchBot-BLE-Sensoren komplett ohne Cloud auslesen",
      "Pelletofen lokal im WLAN überwachen & regeln",
      "Live-Raumtemperatur direkt neben dem Flammen-Icon"
    ],
    screenshots: [
      {
        src: "assets/screenshots/home-preview.svg",
        caption: "Local BLE room climate sensors and LAN pellet stove controls",
        caption_de: "Lokale BLE-Raumklimasensoren und Pelletofen-Steuerung im Heimnetz"
      }
    ]
  },
  {
    id: "shell",
    name: "Maprisma Shell",
    version: "v1.0",
    repoSlug: "maprisma/shell",
    tagline: "Complete theme-synced Hyprland desktop shell in one Quickshell config",
    tagline_de: "Komplette, farbsynchronisierte Hyprland-Desktop-Shell auf Quickshell-Basis",
    description:
      "Turns a bare Hyprland session into a cohesive Maprisma desktop using Quickshell: multi-monitor top bar, notification server with actions and DND, wallpaper daemon, PAM lock screen, volume/brightness OSD, and screenshot/recording/clipboard helpers.",
    description_de:
      "Verwandelt eine Hyprland-Sitzung mit einer einzigen Quickshell-Konfiguration in einen kompletten Maprisma-Desktop: Leiste auf allen Monitoren, Benachrichtigungsserver, Wallpaper, PAM-Sperrbildschirm, Lautstärke-/Helligkeits-OSD sowie Screenshot- und Clipboard-Helfer.",
    category: "shell",
    categoryLabel: "Shell & Windowing",
    categoryLabel_de: "Shell & Fenster",
    featured: false,
    tech: "QML (Quickshell) · Shell",
    desktops: ["Hyprland"],
    icon: "assets/icons/shell.svg",
    github: "https://github.com/maprisma/shell",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/shell.git maprisma-shell\ncd maprisma-shell\n./install.sh",
    highlights: [
      "Live colors synced automatically by Maprisma Theme",
      "Built-in notification server, OSD & PAM lock screen",
      "Includes screenshot, screen-record, clipboard & emoji tools"
    ],
    highlights_de: [
      "Farben folgen automatisch dem aktiven Maprisma Theme",
      "Integrierter Notification-Server, OSD & PAM-Lockscreen",
      "Inklusive Screenshot-, Aufnahme-, Clipboard- & Emoji-Tools"
    ],
    screenshots: [
      {
        src: "assets/screenshots/shell-preview.svg",
        caption: "Hyprland desktop running Maprisma Shell bar, notifications, and OSD",
        caption_de: "Hyprland-Desktop mit Maprisma-Shell-Leiste, Benachrichtigungen und OSD"
      }
    ]
  },
  {
    id: "tiling",
    name: "Maprisma Tiling",
    version: "v1.0",
    repoSlug: "maprisma/maprisma-kwin-scripts",
    tagline: "Hyprland-style dwindle, master & column tiling scripts for KDE Plasma 6",
    tagline_de: "Hyprland-artiges automatisches Fenster-Tiling für KDE Plasma 6 (KWin)",
    description:
      "Brings crisp keyboard- and mouse-driven automatic tiling to KDE Plasma 6 KWin (`maprisma-tiling` + `omarchy-navigation`). Supports dwindle, master, columns, monocle, tabbed window groups, directional focus/swap, scratchpad, and drag-to-swap tiles.",
    description_de:
      "Bringt schnelles automatisches Fenster-Tiling per Tastatur und Maus in KDE Plasma 6 (`maprisma-tiling` + `omarchy-navigation`): Dwindle-, Master-, Spalten- und Monocle-Layouts, Fenstergruppen mit Tabs, Scratchpad und Tauschen per Ziehen.",
    category: "shell",
    categoryLabel: "Shell & Windowing",
    categoryLabel_de: "Shell & Fenster",
    featured: false,
    tech: "KWin QML / JS · Python",
    desktops: ["KDE Plasma"],
    icon: "assets/icons/tiling.svg",
    github: "https://github.com/maprisma/maprisma-kwin-scripts",
    releases: null,
    installCmd:
      "git clone https://github.com/maprisma/maprisma-kwin-scripts.git\ncd maprisma-kwin-scripts\n./install.sh",
    highlights: [
      "Dwindle, master, columns, monocle & tabbed groups",
      "Dynamic desktops, scratchpad & directional swap",
      "Clean uninstall restores your previous KWin shortcuts"
    ],
    highlights_de: [
      "Dwindle-, Master-, Spalten-, Monocle-Layouts & Tab-Gruppen",
      "Dynamische Arbeitsflächen, Scratchpad & Richtungstausch",
      "Sauberes Entfernen stellt frühere KWin-Shortcuts wieder her"
    ],
    screenshots: [
      {
        src: "assets/screenshots/tiling-preview.webp",
        caption: "Interactive tiling layout preview with adjustable master/column splits",
        caption_de: "Interaktive Tiling-Vorschau mit anpassbaren Fensteraufteilungen"
      },
      {
        src: "assets/screenshots/tiling-panel.webp",
        caption: "Workspace layout presets and window count configuration",
        caption_de: "Layout-Presets und Fensteranzahl pro Arbeitsfläche"
      }
    ]
  },
  {
    id: "icons",
    name: "Maprisma Icons",
    version: "v1.0",
    repoSlug: null,
    tagline: "Drag-to-reorder KDE Plasma 6 panel widget for all Maprisma tray icons",
    tagline_de: "KDE-Plasma-6-Leistenwidget zum freien Sortieren aller Maprisma-Icons",
    description:
      "KDE Plasma's default system tray sorts icons on its own; Maprisma Icons puts all your Maprisma apps in a dedicated Plasma 6 panel row where you can click, hold, and drag them into your preferred permanent order — with attention dots and native menus.",
    description_de:
      "Da KDE Plasmas Systemabschnitt Symbole selbst sortiert, bündelt Maprisma Icons alle Maprisma-Apps in einer eigenen Leistenreihe: einfach anklicken, halten und dauerhaft in deine Wunschreihenfolge ziehen.",
    category: "shell",
    categoryLabel: "Shell & Windowing",
    categoryLabel_de: "Shell & Fenster",
    featured: false,
    tech: "KDE Plasma 6 QML · Python",
    desktops: ["KDE Plasma"],
    icon: "assets/icons/icons.svg",
    github: "https://github.com/maprisma",
    releases: null,
    installCmd:
      "# Clone from the Maprisma GitHub organization once published:\ngit clone https://github.com/maprisma/panel.git maprisma-panel\ncd maprisma-panel && ./install.sh",
    highlights: [
      "Click-and-drag custom icon ordering that sticks",
      "Preserves left, middle & right-click tray menus",
      "Includes maprisma-panel-color Plasma theme helper"
    ],
    highlights_de: [
      "Eigene Reihenfolge einfach per Halten & Ziehen festlegen",
      "Volle Links-, Mittel- & Rechtsklick-Menüfunktionen",
      "Inklusive maprisma-panel-color für passende Leistenfarben"
    ],
    screenshots: [
      {
        src: "assets/screenshots/icons-preview.svg",
        caption: "Custom-ordered Maprisma icon row inside the KDE Plasma 6 panel",
        caption_de: "Frei sortierbare Maprisma-Symbolreihe in der KDE-Plasma-6-Leiste"
      }
    ]
  },
  {
    id: "addons",
    name: "Maprisma Add-ons",
    version: "v0.14.6",
    repoSlug: "maprisma/maprisma-addons",
    tagline: "Cryptographically signed, data-only agent & LLM adapters for Maprisma",
    tagline_de: "Kryptografisch signierte, reine Daten-Adapter für Agenten & lokale LLMs",
    description:
      "The public catalog of agent adapters, local LLM definitions, and online provider specs fetched by Maprisma. Every catalog and zip is Ed25519 SSH-signed and verified against the built-in author key — pure declarative data with zero add-on code execution.",
    description_de:
      "Der öffentliche Katalog der Agenten-Adapter, lokalen LLM-Definitionen und Online-Anbieter für Maprisma. Jedes Paket ist per Ed25519-SSH-Schlüssel signiert und wird von Maprisma geprüft — reine Daten ohne fremden Programmcode.",
    category: "ai",
    categoryLabel: "AI & Voice",
    categoryLabel_de: "KI & Sprache",
    featured: false,
    tech: "JSON · Ed25519 SSH Signatures",
    desktops: ["Linux"],
    icon: "assets/icons/addons.svg",
    github: "https://github.com/maprisma/maprisma-addons",
    releases: null,
    installCmd:
      "# Verified & fetched automatically inside Maprisma (Setup → Add-ons).\n# Inspect or verify the signed catalog repository directly:\ngit clone https://github.com/maprisma/maprisma-addons.git",
    highlights: [
      "Ed25519 signature verification built into Maprisma",
      "Pure data definitions — no arbitrary plugin code",
      "Adapters for Claude, Codex, Gemini, Ollama, llama.cpp & more"
    ],
    highlights_de: [
      "Fest eingebaute Ed25519-Signaturprüfung in Maprisma",
      "Reine Datendefinitionen — kein ausführbarer Add-on-Code",
      "Adapter für Claude, Codex, Gemini, Ollama, llama.cpp u. v. m."
    ],
    screenshots: [
      {
        src: "assets/screenshots/addons-preview.svg",
        caption: "Signed declarative catalog of coding agents, local LLMs, and online providers",
        caption_de: "Signierter Katalog für Coding-Agenten, lokale LLMs und Online-Anbieter"
      }
    ]
  }
];
