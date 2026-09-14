export const profile = {
  name: "Bekhruz Valijonov",
  role: "Frontend / Full-Stack Developer",
  location: "Tashkent, Uzbekistan",
  email: "valijonovbekhruz@gmail.com",
  phone: "+998 (99) 044-36-44",
  github: "https://github.com/BekhruzValijonov",
  githubLabel: "github.com/BekhruzValijonov",
  linkedin: "https://www.linkedin.com/in/bekhruz-valijonov-95917b237",
  linkedinLabel: "in/bekhruz-valijonov",
  available: true,
  summary:
    "Frontend-focused full-stack developer and founder of Maven Systems, shipping production web, desktop, mobile and TV apps end to end — React, TypeScript and Next.js on the front, Electron and Tauri with Rust on the desktop, Tauri and Kotlin on Android and Android TV, and NestJS with PostgreSQL on the back. I care about scalable architecture, real-time dashboards, interactive data visualization, WebSocket flows, hardware-facing kiosk and TV apps, AI/LLM integrations and clean cross-platform delivery.",
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "Leerybit",
    role: "Frontend Developer",
    location: "Tashkent",
    period: "Oct 2023 — Present",
    current: true,
    points: [
      "Build and ship the IQueue queue-management ecosystem used in bank branches — admin panel, self-service kiosks, teller workstations, reception desks, waiting-room TV boards and the shared frontend platform behind them.",
      "Built most of the IQueue admin panel's setup screens in Next.js — created 12 of its 29 pages and wrote nearly all the code in 9 more, including a drag-and-drop kiosk layout editor, a scenario builder and scheduled exchange rates.",
      "Authored about 60 @iqueue/ui-kit components — including D-pad navigation and an on-screen keyboard for Android TV and kiosks, RBAC components and the React 19 upgrade — and have maintained the @iqueue/core SDK since 2024.",
      "Built Qabul, a booking and live-queue platform: a NestJS + Prisma API, a Tauri customer app with maps, booking and QR check-in, a staff scanner app, and business and super-admin web panels.",
      "Built the Tauri reception client with a Rust/Kotlin hardware-ID plugin and 173 Vitest tests, and auto-update with a version blacklist for the Electron launcher that runs every kiosk, desk and TV.",
      "Built operator shift timelines and serpentine service-map charts in amCharts 5, live ticket timers for the teller workstation, and a MediaPipe face-tracking camera for kiosks, including a branded kiosk for Ipak Yo'li Bank.",
      "Rewrote the waiting-room TV board as a native Android TV app in Kotlin and Jetpack Compose, and delivered a traffic-violation moderation console, a BLE meter-inspection Android app, a flow-meter panel and a Modbus configurator.",
    ],
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "NestJS",
      "Tauri",
      "Rust",
      "Electron",
      "Kotlin",
      "Jetpack Compose",
      "GraphQL",
      "WebSocket",
      "amCharts",
      "Storybook",
      "ui-kit (internal)",
      "core (internal)",
    ],
  },
  {
    company: "Maven Systems",
    role: "Founder & Lead Developer",
    location: "Tashkent",
    period: "2026 — Present",
    current: true,
    points: [
      "Founded Maven Systems and shipped its first product, Calora AI — a privacy-first nutrition tracker for Android and desktop, designed, built and published solo, with no account, no subscription and no backend of its own.",
      "Built a local-first data layer on SQLite behind repository ports, with an in-memory twin for the browser preview and one shared contract test suite run against both.",
      "Integrated bring-your-own-key AI across OpenAI, Anthropic, Gemini, OpenRouter, Ollama, LM Studio and any OpenAI-compatible endpoint — photo meal scanning, a streaming nutrition coach, recipe suggestions and editable AI memory.",
      "Kept API keys out of the database and exports entirely: they live only in the platform secret store — Keychain, Credential Manager, Secret Service or Android Keystore — through a Rust bridge.",
      "Shipped a 7,800-food USDA database, barcode lookup via Open Food Facts, on-device statistics that explain every number, local reminders, JSON/CSV export and English/Russian/Uzbek localization.",
    ],
    stack: [
      "Tauri",
      "React",
      "TypeScript",
      "Rust",
      "SQLite",
      "Vite",
      "Vitest",
      "CSS Modules",
      "LLM APIs",
      "Ollama",
      "i18n",
    ],
  },
  {
    company: "Imaan-Tech",
    role: "Frontend Developer · Freelance",
    location: "Remote",
    period: "Jan 2026 — May 2026",
    points: [
      "Engineered a two-app education platform end to end — a React/TypeScript admin dashboard and a student-facing portal — with Zustand state, Tailwind and tri-lingual i18n (Uzbek/Russian/English).",
      "Built large multi-module admin tooling: student finance and debtors, teacher salaries and payouts, expenses, invoices, KPI dashboards and reports, branches, courses/groups/tests/homeworks, users and RBAC.",
      "Developed student pages — dashboard, courses, video lessons, tests, homeworks, vocabulary, attendance, finance and a gamified rating/leaderboard.",
      "Built an AI tutoring suite (Chat, Explain, Speaking, Writing) with SSE streaming over a DeepSeek backend, audio capture with band-score feedback and a Three.js speaking visualization.",
      "Implemented Face ID attendance with react-webcam capture and GPS geofencing, plus camera dashboards, Hikvision/RTSP device management and Google Gemini lesson-video analysis.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Zustand", "SSE", "DeepSeek", "Google Gemini", "Three.js", "Face ID", "GPS"],
  },
];

export type ProjectGroup = { company: string; title: string; caption: string };

/** Projects section is split into these groups, in this order. */
export const projectGroups = [
  { company: "Imaan-Tech", title: "Imaan-Tech", caption: "Education platform, built as a freelancer." },
  { company: "Leerybit", title: "Leerybit", caption: "The IQueue queue-management ecosystem used in bank branches." },
  { company: "Maven Systems", title: "Maven Systems", caption: "Products of the company I founded — designed, built and shipped solo." },
] as const satisfies readonly ProjectGroup[];

export type Project = {
  index: string;
  title: string;
  /** Must name one of `projectGroups`, otherwise the project would never render. */
  company: (typeof projectGroups)[number]["company"];
  blurb: string;
  points: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  note?: string;
  credentials?: { role: string; login: string; password: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Edu Admin Dashboard",
    company: "Imaan-Tech",
    blurb:
      "School & learning-center management dashboard — academics, finance, attendance, communication, cameras, reporting and administration.",
    points: [
      "Built finance modules — student finance & debtors, teacher salaries & payouts, expenses, invoices, course pricing and admin reports — with Excel export and date filters.",
      "Implemented KPI dashboards, leaderboards and charts (ApexCharts / Recharts), Leaflet maps, RBAC and large multi-module navigation.",
      "Developed camera features — camera dashboards, live analysis, Hikvision/RTSP device management and Google Gemini lesson-video analysis (transcript, scoring, recommendations).",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Zustand", "ApexCharts", "Leaflet", "Google Gemini", "Excel"],
    links: [{ label: "admin.imaantech.uz", href: "https://admin.imaantech.uz" }],
    credentials: [{ role: "Admin", login: "+998940962906", password: "string" }],
  },
  {
    index: "02",
    title: "Student Web Portal & AI Tools",
    company: "Imaan-Tech",
    blurb: "Student-facing side of an education-management ecosystem, with AI-powered learning tools.",
    points: [
      "Built student pages: dashboard, courses, video lessons, tests, homeworks, vocabulary, attendance, finance and a gamified rating/leaderboard.",
      "Developed an AI tutoring suite — Chat, Explain, Speaking and Writing — with SSE streaming over a DeepSeek backend, audio capture, band-score feedback and a Three.js speaking sphere.",
      "Implemented Face ID attendance with react-webcam capture and GPS geofencing, plus a face-registration profile flow.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Zustand", "DeepSeek", "SSE", "Three.js", "Face ID", "GPS"],
    links: [{ label: "edu.imaantech.uz", href: "https://edu.imaantech.uz" }],
    credentials: [{ role: "Student", login: "+998200272727", password: "string" }],
  },
  {
    index: "03",
    title: "IQueue Admin Panel",
    company: "Leerybit",
    blurb: "Admin panel where bank head-office and branch admins configure the IQueue system and monitor it live.",
    points: [
      "Built most of the setup screens in Next.js and React — created 12 of the 29 pages and wrote nearly all the code in 9 more: region and branch tree, operators, services, system settings, devices, playlists and scenarios.",
      "Built a drag-and-drop kiosk layout editor and a scenario builder for operator question and redirect flows, with changes pushed to devices live over WebSocket.",
      "Built region- and branch-level exchange-rate management with scheduled changes, a 60/80 mm ticket editor with import and export, and operator action limits confirmed by one-time passwords.",
      "Built the per-device software-update endpoint that serves Windows and Linux launchers with a per-device lock and queue, and added operator analytics — action log, event timeline and serpentine service-map chart.",
    ],
    stack: ["Next.js", "React", "JavaScript", "GraphQL", "WebSocket", "amCharts 4", "ExcelJS", "SWR", "i18n", "ui-kit (internal)"],
  },
  {
    index: "04",
    title: "Design System & Core SDK",
    company: "Leerybit",
    blurb: "@iqueue/ui-kit and @iqueue/core — the shared component library and TypeScript SDK every IQueue app is built on.",
    points: [
      "Authored about 60 @iqueue/ui-kit components over 559 commits — date and time pickers, TreeSelect, VirtualizedList, EventTimeline, BigCalendar, Splitter, drag-and-drop and an HCT colour picker.",
      "Added TV-remote (D-pad) navigation, a virtual cursor and a multilingual on-screen keyboard so the library works on Android TV and touch kiosks.",
      "Designed a promise-based modal API, added ABAC/RBAC permission components with auth and navigation guards in the app shell, and upgraded the library from React 18 to 19.",
      "Maintained @iqueue/core — about 86% of its commits since 2024 and 32 releases — adding re-login on account-change events, 401 handling, branch-timezone-aware time and typed server options.",
    ],
    stack: ["React", "TypeScript", "Storybook", "Rollup", "SCSS", "GraphQL", "WebSocket", "Axios"],
  },
  {
    index: "05",
    title: "Qabul Booking & Live Queue",
    company: "Leerybit",
    blurb: "Multi-tenant booking and live-queue platform for businesses — one API, two mobile apps and two web panels.",
    points: [
      "Built the multi-tenant NestJS + Prisma + PostgreSQL API — 21 modules, 31 models and about 176 endpoints documented in Swagger — with rotating JWT refresh tokens, role guards and Socket.IO rooms per organization, branch and user.",
      "Built Qabul GO, a Tauri 2 + React 19 app where customers find businesses on a Mapbox map, book a slot that respects employee schedules, check in by QR and follow their live queue position.",
      "Built Qabul Business, a staff check-in app with a ZXing camera scanner that validates single-use appointment codes — too early, too late, wrong branch, already used — and issues queue tickets.",
      "Built the Business Portal — appointments, calendar, customers, branches, services, employee schedules, a live queue monitor with a TV display and analytics with CSV export — and a Super Admin console for organizations, plans, support tickets, audit logs and audited impersonation.",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Socket.IO", "Tauri", "React", "Mapbox GL", "ZXing", "Swagger", "Vitest"],
  },
  {
    index: "06",
    title: "QMS Reception Desktop Client",
    company: "Leerybit",
    blurb:
      "Tauri desktop client for branch reception staff — live operator board, queue monitor and ticket issuing for the IQueue system.",
    points: [
      "Built the setup flow, live operator activity board and queue monitor over the IQueue event bus, with reconnect-after-sleep and periodic resync — and cut 11 of the app's 14 releases.",
      "Implemented a service catalog with nested sections, VIP tickets and a multi-step print wizard, plus GraphQL stats for queued, served and issued tickets and average timings.",
      "Wrote a custom Tauri plugin in Rust and Kotlin that returns a hardware ID on desktop and Android, and added operator shift history on amCharts 5 timelines.",
      "Localized the client into 4 languages and covered its logic with 173 Vitest tests.",
    ],
    stack: ["Tauri", "Rust", "React", "TypeScript", "WebSocket", "GraphQL", "amCharts 5", "Vitest", "Kotlin", "i18n"],
  },
  {
    index: "07",
    title: "Self-Service Queue Kiosks",
    company: "Leerybit",
    blurb: "Touch kiosks in bank branches where visitors pick a service, activate a booking and get a printed ticket.",
    points: [
      "Built a face-aware camera snapshot: MediaPipe face detection picks the most central face, then zooms and tracks it on a canvas before capture, behind an admin setting.",
      "Added 60/80 mm ticket layouts with configurable print direction, QR ticket activation, a booking-code keypad, services grouped by tags and early/late arrival messages across 40 releases of the kiosk library.",
      "Delivered a branded kiosk for Ipak Yo'li Bank as a React package inside the launcher — nested service sections with promo banners, grouped wait-time estimates and live refresh from IQueue bus events, released 21 times.",
      "Localized the kiosks into 6 languages, including Uzbek and Karakalpak in both Latin and Cyrillic scripts.",
    ],
    stack: ["React", "JavaScript", "MediaPipe", "Canvas API", "Rollup", "SCSS", "WebSocket", "ui-kit (internal)", "core (internal)"],
  },
  {
    index: "08",
    title: "Operator Workstation",
    company: "Leerybit",
    blurb: "Teller workstation for bank branches — open a session, then call, serve, redirect and rate tickets.",
    points: [
      "Built amCharts 5 activity-timeline and serpentine service-map charts showing an operator's work, calling, idle and break time across a shift.",
      "Added a live ticket timer against planned service time with warning and critical states, and reworked queue counters and average-service stats.",
      "Built scenario question dialogs, session restore after reload, a client data form and operator action limits.",
      "Maintained the React + TypeScript library and shipped 41 releases to the internal npm registry, including Karakalpak localization.",
    ],
    stack: ["React", "TypeScript", "amCharts 5", "Rollup", "SCSS", "GraphQL", "WebSocket", "ui-kit (internal)", "core (internal)"],
  },
  {
    index: "09",
    title: "Electron Desktop Launcher",
    company: "Leerybit",
    blurb:
      "Electron shell installed on IQueue kiosks, operator desks and TVs — loads the right app for each device and handles settings, printing and updates.",
    points: [
      "Built auto-update end to end with electron-updater: a per-platform feed from the local server, download progress, safe quit-and-install and an AppImage relaunch fix for Linux kiosk mode.",
      "Added a server-side version and device blacklist that retires outdated builds after a grace period.",
      "Built an on-screen keyboard, kiosk command-line flags, printer layout settings and serial-port (RS485) diagnostics.",
      "Blocked shutdown while tickets are still queued, with warnings in 6 languages, and restructured the app around a config file, a server-URL setup dialog and a TV-only build across 24 tagged releases.",
    ],
    stack: ["Electron", "electron-updater", "electron-builder", "React", "Node.js", "RS485 / Serial", "AppImage", "ui-kit (internal)", "core (internal)"],
  },
  {
    index: "10",
    title: "Waiting-Room TV Displays",
    company: "Leerybit",
    blurb: "Queue boards on branch waiting-room screens — called tickets, voice announcements, video playlists and exchange rates.",
    points: [
      "Sole maintainer since 2024 of @iqueue/tv-app, the React board the launcher runs in TV mode — client-branded themes, fullscreen, ticket call animations, volume controls and Karakalpak localization across 27 releases.",
      "Fixed video freezes on Android TV boxes by recovering from hardware decoder failures with retries and playlist fallback in the shared media components.",
      "Rewrote the board as a native Android TV app in Kotlin and Jetpack Compose, talking to the IQueue GraphQL API over Ktor with a WebSocket event stream, ping watchdog and auto-reconnect.",
      "Built an ExoPlayer ad playlist, server-driven branding themes, a remote-only settings flow and 130 JUnit tests for the native app.",
    ],
    stack: ["React", "Kotlin", "Jetpack Compose", "Android TV", "Ktor", "GraphQL", "WebSocket", "ExoPlayer", "Rollup", "SCSS"],
  },
  {
    index: "11",
    title: "Traffic Violation Moderation Console",
    company: "Leerybit",
    blurb:
      "Console where moderators review camera-detected traffic violations — plate, violation code and photo or video evidence.",
    points: [
      "Built the validation flow in React + TypeScript: moderators confirm, correct or decline plates in batches, with permissions by role, device and violation type across 14 roles.",
      "Added live updates over Socket.IO — moderator stats refresh as validations land, and the cancel queue follows lock and unlock events.",
      "Built a violations registry with 7 server-side filters, media preview, restore and download, plus a moderator performance page with amCharts stacked charts.",
    ],
    stack: ["React", "TypeScript", "Vite", "Socket.IO", "amCharts 4", "SheetJS", "Sass", "ui-kit (internal)"],
  },
  {
    index: "12",
    title: "Meter Inspection Field App",
    company: "Leerybit",
    blurb:
      "Android app for smart-meter field inspectors — BLE meter readings, inspection logs and recorded GPS walking routes.",
    points: [
      "Built a Tauri 2 + React + Framework7 Android app with 9 screens and separate master and operator flows.",
      "Wrote a byte-level parser for the meters' BLE broadcast (battery, temperature, reading, EUI) and a magnet-activation scan flow.",
      "Extended the native Kotlin/Rust Tauri plugin with foreground-service GPS tracking and a file-backed location buffer that survives app suspension.",
      "Recorded walking routes with GPS outlier filtering on a Mapbox map, stored offline in PouchDB, and added an offline-lockout policy written in Rust.",
    ],
    stack: ["Tauri", "React", "TypeScript", "Framework7", "Kotlin", "Rust", "BLE", "Mapbox GL", "PouchDB"],
  },
  {
    index: "13",
    title: "IoT Device Admin Tools",
    company: "Leerybit",
    blurb: "Admin panels for connected hardware — smart water flow meters and a Modbus gateway.",
    points: [
      "Built a flow-meter admin panel in React with remote valve control, live device status over Socket.IO and paginated device-event history, localized into English, Russian and Uzbek.",
      "Built a Modbus register-map configurator — address, length, read/write mode, data type (u8/u16/f32), byte and word order — with named variable bindings per node and room grouping.",
    ],
    stack: ["React", "JavaScript", "Socket.IO", "i18next", "Modbus", "REST", "Vite", "ui-kit (internal)"],
  },
  {
    index: "14",
    title: "Calora AI",
    company: "Maven Systems",
    blurb:
      "Privacy-first nutrition tracker for Android and desktop — no account, no backend, and AI that runs on the user's own provider and key.",
    points: [
      "Built a local-first Tauri app on SQLite: meals, weight, goals, AI memory and coach history never leave the device, with full JSON/CSV export and granular deletion.",
      "Implemented AI photo meal scanning, a streaming nutrition coach and recipe suggestions over a provider registry — OpenAI, Anthropic, Gemini, OpenRouter, Ollama or any OpenAI-compatible API — with keys held only in the OS secret store.",
      "Shipped a 7,800-food USDA database, barcode lookup via Open Food Facts, on-device statistics that explain every number, local reminders and English/Russian/Uzbek localization.",
    ],
    stack: ["Tauri", "React", "TypeScript", "Rust", "SQLite", "Vite", "Vitest", "LLM APIs", "Ollama", "i18n"],
    links: [
      { label: "bekhruzvalijonov.github.io/calora-info", href: "https://bekhruzvalijonov.github.io/calora-info/" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ai.calora.tracker" },
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Nuxt.js", "Redux Toolkit", "Zustand", "Pinia", "SWR", "Axios"],
  },
  {
    label: "Architecture & Patterns",
    items: [
      "Component-Based Architecture",
      "Feature-Sliced Design",
      "Design Systems",
      "State Management",
      "RBAC / ABAC",
      "Local-First & Offline",
      "REST API",
      "GraphQL",
      "WebSocket",
    ],
  },
  {
    label: "Styling & UI",
    items: ["HTML5", "CSS3", "SCSS", "Tailwind CSS", "CSS Modules", "MUI", "NativeBase", "Vuetify", "Responsive Design", "UI/UX"],
  },
  {
    label: "Data Visualization",
    items: ["amCharts 4/5", "D3.js", "Three.js / React Three Fiber", "Mapbox GL", "Interactive Dashboards", "Real-Time Charts", "Timeline Charts"],
  },
  {
    label: "Backend & API",
    items: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "Express.js", "Hono", "Socket.IO", "REST APIs", "Auth Flows", "OAuth", "JWT"],
  },
  {
    label: "Cloud & Serverless",
    items: ["Cloudflare Workers", "Cloudflare R2", "Edge Functions", "Cron Jobs", "Web Push", "Firebase Cloud Messaging"],
  },
  {
    label: "Desktop, Mobile & TV",
    items: [
      "Electron",
      "Tauri",
      "Rust",
      "Framework7",
      "React Native",
      "Kotlin",
      "Jetpack Compose",
      "Ktor",
      "ExoPlayer",
      "Android WebView",
      "Android TV",
    ],
  },
  {
    label: "Hardware & IoT",
    items: ["Kiosks & Ticket Printing", "RS485 / Serial", "Modbus", "BLE", "USB HID", "GPS Tracking", "MediaPipe"],
  },
  {
    label: "Testing & Tooling",
    items: ["Vitest", "Jest", "JUnit", "Playwright", "Storybook", "Git", "Linux", "Bash", "Vite", "Rollup", "Webpack", "ESLint", "Prettier"],
  },
  {
    label: "AI & Integrations",
    items: [
      "OpenAI / Anthropic / Gemini APIs",
      "OpenRouter",
      "Ollama",
      "DeepSeek",
      "Cloudflare Workers AI",
      "LLM Integrations",
      "SSE Streaming",
      "AI Vision",
      "Image Analysis",
    ],
  },
];

export const education = [
  { school: "PDP Academy", program: "Frontend Development", period: "Sep 2022 — Aug 2023" },
  { school: "Netology · Online", program: "Advanced Frontend", period: "Jan 2023 — May 2023" },
];

export const languages = [
  { name: "Uzbek", level: "Native", pct: 100 },
  { name: "Russian", level: "C2", pct: 95 },
  { name: "English", level: "B1", pct: 55 },
];

export const marqueeWords = [
  "React",
  "TypeScript",
  "Next.js",
  "NestJS",
  "Tauri",
  "Rust",
  "Electron",
  "Kotlin",
  "Android TV",
  "GraphQL",
  "WebSocket",
  "amCharts",
  "MediaPipe",
  "PostgreSQL",
  "LLM",
  "AI Vision",
];
