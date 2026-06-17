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
    "Frontend-focused full-stack developer shipping production web, desktop and mobile apps end to end — React, TypeScript and Next.js on the front, Electron and Tauri on the desktop, React Native on mobile, and serverless backends on Cloudflare Workers with Hono. I care about scalable architecture, real-time dashboards, interactive data visualization, WebSocket flows, AI/LLM integrations and clean cross-platform delivery.",
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
    period: "Oct 2023 — Jun 2026",
    current: false,
    points: [
      "Built and shipped the frontend across Leerybit's IQueue queue-management ecosystem — real-time monitoring dashboards, operator workflows, reception kiosks, data validation and admin tooling.",
      "Developed real-time analytics dashboards with Socket.io / WebSocket live data streams and amCharts 4/5 visualizations, including Gantt, linear and serpentine operator-scheduling charts.",
      "Maintained the shared internal design system (@iqueue/ui-kit) — 100+ React/TypeScript components with Storybook docs, accessibility and Vitest coverage — and the @iq/core SDK (GraphQL query building, WebSocket, Axios).",
      "Built a Tauri desktop reception/kiosk client (operator task picker, VIP prioritization, live session and event bus) and an Electron launcher with USB thermal-printer (ESC/POS), serial-port and auto-update integration.",
      "Created a data-validation frontend with Mapbox geospatial views, real-time violation events and Excel export, backed by a Next.js + PostgreSQL processing server for reports, devices, operators and exchange-rate scripting.",
      "Delivered kiosk displays with MediaPipe face detection, an RBAC admin UI with an IoT device model editor, an industrial ModBus dashboard, and a Tauri + Framework7 offline-first Android field-logging app.",
    ],
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "WebSocket",
      "amCharts",
      "Electron",
      "Tauri",
      "Framework7",
      "Next.js",
      "GraphQL",
      "Storybook",
      "Mapbox",
      "ui-kit (internal)",
      "core (internal)",
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
  {
    company: "Plantix AI",
    role: "Full-Stack Developer · Personal Project",
    location: "Personal Project",
    period: "2026",
    points: [
      "Solo full-stack personal project — designed, built and shipped the serverless backend and the cross-platform mobile/desktop client end to end.",
      "Built the backend on Cloudflare Workers with Hono, a D1 SQL database, R2 image storage and Queues for async scan processing.",
      "Implemented a two-stage AI vision pipeline (plant identification + disease/pest diagnosis) on Cloudflare Workers AI, with structured JSON output and agronomy-context modifiers.",
      "Added JWT + Google OAuth auth, scheduled cron care reminders, and push notifications via Firebase (Android/web) and APNs (iOS).",
      "Built the Tauri + React + Framework7 client for Android and desktop with native camera capture, torch control, a plant-care journal and an AI chatbot.",
    ],
    stack: [
      "Cloudflare Workers",
      "Hono",
      "Workers AI",
      "D1",
      "R2",
      "Queues",
      "Cron",
      "Push (FCM/APNs)",
      "Google OAuth",
      "Tauri",
      "Framework7",
      "React",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  company: string;
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
    title: "Queue Management & Analytics",
    company: "Leerybit",
    blurb: "Real-time monitoring and operator-workflow platform for the IQueue queue-management system.",
    points: [
      "Built a live flow-monitoring dashboard streaming queue metrics over Socket.io with amCharts 5 visualizations and i18n.",
      "Developed an operator-workflow library with Gantt, linear and serpentine scheduling charts, published to the internal registry.",
      "Implemented reporting, analytics, filtering and live monitoring for high-volume operational data.",
    ],
    stack: ["React", "TypeScript", "WebSocket", "amCharts 5", "i18next", "ui-kit (internal)", "core (internal)"],
  },
  {
    index: "04",
    title: "Reception & Kiosk Apps",
    company: "Leerybit",
    blurb: "Desktop reception client and public kiosk displays for queue management hardware.",
    points: [
      "Built a Tauri desktop reception/kiosk client with operator task picker, VIP prioritization and a live session/event bus.",
      "Developed kiosk display apps with MediaPipe face detection and marquee-style information feeds.",
      "Implemented system configuration, device/workspace selection and offline-tolerant behavior.",
    ],
    stack: ["Tauri", "React", "TypeScript", "MediaPipe", "WebSocket", "ui-kit (internal)", "core (internal)"],
  },
  {
    index: "05",
    title: "Electron Desktop Launcher",
    company: "Leerybit",
    blurb: "Cross-platform desktop launcher for the IQueue app with hardware integration and updates.",
    points: [
      "Integrated USB thermal printers (ESC/POS) and serial-port devices for ticketing hardware.",
      "Implemented auto-launch, update handling, relaunch logic and cross-platform deployment workflows.",
      "Solved AppImage-specific debugging and packaging challenges on Linux, Windows and macOS.",
    ],
    stack: ["Electron", "Node.js", "USB / Serial", "ESC/POS", "WebSocket", "ui-kit (internal)", "core (internal)"],
  },
  {
    index: "06",
    title: "Design System & Core SDK",
    company: "Leerybit",
    blurb: "Internal frontend platform powering every app in the IQueue ecosystem.",
    points: [
      "Maintained @iqueue/ui-kit — 100+ React/TypeScript components with Storybook docs, accessibility and Vitest coverage.",
      "Developed the @iq/core SDK with GraphQL query building, WebSocket transport and Axios-based data services.",
      "Enforced consistency across apps with shared design tokens, linting suites and bundle guards.",
    ],
    stack: ["React", "TypeScript", "Storybook", "Vitest", "GraphQL", "Rollup", "SCSS"],
  },
  {
    index: "07",
    title: "Validation, Admin & Field Tooling",
    company: "Leerybit",
    blurb: "Data-quality, administration and IoT/field apps across the IQueue platform.",
    points: [
      "Built a data-validation frontend (violations, validation stats, cancellations) with Mapbox geospatial views, real-time events and Excel export.",
      "Contributed to a Next.js + PostgreSQL processing server for reports, devices, operators and exchange-rate scripting.",
      "Delivered an RBAC admin UI with an IoT device model editor, a ModBus industrial dashboard and a Tauri + Framework7 offline-first Android field-logging app.",
    ],
    stack: ["React", "Next.js", "PostgreSQL", "Mapbox", "Framework7", "Tauri", "ModBus", "amCharts 4"],
  },
  {
    index: "08",
    title: "Plantix AI",
    company: "Personal Project",
    blurb: "Solo full-stack mobile + desktop app for AI plant identification, disease detection and care tracking.",
    points: [
      "Built a serverless backend on Cloudflare Workers (Hono) with a D1 database, R2 image storage and Queues for async scan jobs.",
      "Implemented a two-stage Workers AI vision pipeline for plant ID and disease/pest diagnosis, plus a plant-care chatbot, care schedules and reminders.",
      "Shipped a Tauri + Framework7 client for Android and desktop with native camera + torch capture, Google OAuth deep-linking and push notifications.",
    ],
    stack: [
      "Cloudflare Workers",
      "Hono",
      "Workers AI",
      "D1",
      "R2",
      "Queues",
      "Tauri",
      "Framework7",
      "React",
      "Google OAuth",
      "Push",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Nuxt.js", "Redux Toolkit", "Pinia", "SWR", "Axios"],
  },
  {
    label: "Architecture & Patterns",
    items: ["Component-Based Architecture", "Feature-Sliced Design", "State Management", "REST API", "WebSocket"],
  },
  {
    label: "Styling & UI",
    items: ["HTML5", "CSS3", "SCSS", "Tailwind CSS", "MUI", "NativeBase", "Vuetify", "Responsive Design", "UI/UX"],
  },
  {
    label: "Data Visualization",
    items: ["amCharts 4/5", "D3.js", "Interactive Dashboards", "Real-Time Charts", "Data Aggregation"],
  },
  {
    label: "Backend & API",
    items: ["Node.js", "Express.js", "Hono", "PostgreSQL", "REST APIs", "Auth Flows", "OAuth", "Google OAuth", "JWT"],
  },
  {
    label: "Cloud & Serverless",
    items: ["Cloudflare Workers", "Cloudflare R2", "Edge Functions", "Cron Jobs", "Web Push"],
  },
  {
    label: "Desktop & Mobile",
    items: ["Electron", "Tauri", "Framework7", "React Native", "Kotlin", "Jetpack Compose", "Android WebView", "Android TV"],
  },
  {
    label: "Tools & Infra",
    items: ["Git", "GitHub", "Linux", "Bash", "Webpack", "Vite", "Rollup", "Storybook", "ESLint", "Prettier"],
  },
  {
    label: "AI & Integrations",
    items: [
      "Cloudflare Workers AI",
      "DeepSeek",
      "Google Gemini",
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
  "Electron",
  "Tauri",
  "React Native",
  "WebSocket",
  "Node.js",
  "Tailwind",
  "Hono",
  "Cloudflare",
  "Workers AI",
  "DeepSeek",
  "Gemini",
  "LLM",
  "AI Vision",
];
