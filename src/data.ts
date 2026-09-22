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
    "Frontend-focused full-stack developer with three years of commercial experience and the founder of Maven Systems. I build web, desktop, mobile and Android TV applications — mostly data-heavy admin panels, real-time dashboards and apps for kiosks and other devices — along with the APIs behind them.",
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
      "Develop frontend applications for IQueue, a queue-management system used in bank branches: admin panel, operator workstation, reception desk, self-service kiosks and waiting-room TV screens.",
      "Develop components for the company's shared React UI library and maintain the client SDK used by all IQueue applications.",
      "Built Qabul, a booking and live-queue platform with customer and staff mobile apps, web admin panels and a backend API.",
      "Rewrote the waiting-room TV app as a native Android TV application.",
      "Delivered internal tools for traffic-violation moderation, field meter inspections and IoT device management.",
    ],
    stack: ["React", "TypeScript", "Next.js", "Tauri", "Electron", "Kotlin", "WebSocket"],
  },
  {
    company: "Maven Systems",
    role: "Founder & Lead Developer",
    location: "Tashkent",
    period: "2026 — Present",
    current: true,
    points: [
      "Founded Maven Systems; its first product is Calora AI, a privacy-focused nutrition tracker for Android and desktop.",
      "Designed and developed the app end to end: on-device data storage, AI meal recognition with the user's own API key, statistics and localization in three languages.",
    ],
    stack: ["Tauri", "React", "TypeScript", "Rust", "SQLite"],
  },
  {
    company: "Imaan-Tech",
    role: "Frontend Developer · Freelance",
    location: "Remote",
    period: "Jan 2026 — May 2026",
    points: [
      "Developed two web applications for an education platform: an admin dashboard and a student portal.",
      "Implemented admin modules for finance, payroll, reports, courses, attendance and user roles.",
      "Built AI-assisted learning tools for chat, speaking and writing practice, and Face ID attendance with geofencing.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Zustand"],
  },
];

export type ProjectGroup = { company: string; title: string; caption: string };

/** Projects section is split into these groups, in this order. */
export const projectGroups = [
  { company: "Imaan-Tech", title: "Imaan-Tech", caption: "Education platform, freelance." },
  { company: "Leerybit", title: "Leerybit", caption: "IQueue queue-management system for bank branches." },
  { company: "Maven Systems", title: "Maven Systems", caption: "My own company." },
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
    blurb: "Management dashboard for schools and learning centers.",
    points: [
      "Finance modules: student payments and debts, teacher salaries, expenses and invoices, with Excel export.",
      "KPI dashboards, reports, role-based access and camera management with AI lesson-video analysis.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Zustand"],
    links: [{ label: "admin.imaantech.uz", href: "https://admin.imaantech.uz" }],
    credentials: [{ role: "Admin", login: "+998940962906", password: "string" }],
  },
  {
    index: "02",
    title: "Student Portal & AI Tools",
    company: "Imaan-Tech",
    blurb: "Student-facing portal of the same education platform.",
    points: [
      "Courses, video lessons, tests, homework, attendance and a rating leaderboard.",
      "AI practice tools for chat, speaking and writing, and Face ID attendance with geofencing.",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    links: [{ label: "edu.imaantech.uz", href: "https://edu.imaantech.uz" }],
    credentials: [{ role: "Student", login: "+998200272727", password: "string" }],
  },
  {
    index: "03",
    title: "IQueue Admin Panel",
    company: "Leerybit",
    blurb: "Web panel for configuring and monitoring the queue system across bank branches.",
    points: [
      "Developed configuration pages for branches, operators, services, devices, playlists and scenarios.",
      "Built a drag-and-drop kiosk layout editor, exchange-rate scheduling and operator activity charts.",
    ],
    stack: ["Next.js", "React", "amCharts", "WebSocket"],
  },
  {
    index: "04",
    title: "Qabul Booking Platform",
    company: "Leerybit",
    blurb: "Online booking and live-queue platform for service businesses.",
    points: [
      "Built customer and staff mobile apps with map search, booking, QR check-in and live queue position.",
      "Developed the business and super-admin web panels and the backend API.",
    ],
    stack: ["React", "Tauri", "PostgreSQL"],
  },
  {
    index: "05",
    title: "Design System & Client SDK",
    company: "Leerybit",
    blurb: "Shared UI library and client SDK used by all IQueue applications.",
    points: [
      "Developed components such as date and time pickers, tree select, calendars and virtualized lists.",
      "Added TV-remote navigation and an on-screen keyboard for Android TV and kiosks; maintain the SDK.",
    ],
    stack: ["React", "TypeScript", "Storybook"],
  },
  {
    index: "06",
    title: "Operator Workstation",
    company: "Leerybit",
    blurb: "Workstation app for bank tellers to call, serve and redirect customers.",
    points: [
      "Added shift activity timelines, a service timer and queue statistics.",
      "Implemented scenario questions, session restore and a customer data form.",
    ],
    stack: ["React", "TypeScript", "amCharts"],
  },
  {
    index: "07",
    title: "Reception Desktop App",
    company: "Leerybit",
    blurb: "Desktop app for branch reception staff to monitor the queue and issue tickets.",
    points: [
      "Built the operator activity board, live queue view and ticket printing flow.",
      "Implemented reconnection after sleep and a native device-ID plugin for desktop and Android.",
    ],
    stack: ["Tauri", "React", "TypeScript", "Rust"],
  },
  {
    index: "08",
    title: "Kiosk, TV & Launcher Apps",
    company: "Leerybit",
    blurb: "Customer-facing apps running on kiosks and waiting-room screens in bank branches.",
    points: [
      "Developed kiosk features such as QR and booking activation and face-detection camera capture; delivered a kiosk for Ipak Yo'li Bank.",
      "Maintain the waiting-room TV app and rewrote it as a native Android TV application.",
      "Implemented auto-update and outdated-version blocking in the Electron launcher that runs these apps.",
    ],
    stack: ["React", "Electron", "Kotlin", "Jetpack Compose", "MediaPipe"],
  },
  {
    index: "09",
    title: "Traffic Violation Moderation Console",
    company: "Leerybit",
    blurb: "Web console for reviewing traffic violations detected by cameras.",
    points: [
      "Built the review flow with role- and device-based permissions.",
      "Added a violations registry with filters and a moderator statistics page with live updates.",
    ],
    stack: ["React", "TypeScript", "Socket.IO"],
  },
  {
    index: "10",
    title: "Field & IoT Tools",
    company: "Leerybit",
    blurb: "Smaller apps for field inspections and connected devices.",
    points: [
      "Contributed to an Android app for meter inspectors: Bluetooth meter readings and GPS route tracking.",
      "Built an admin panel for smart water meters with remote valve control, and a Modbus register configurator.",
    ],
    stack: ["Tauri", "React", "Kotlin", "BLE"],
  },
  {
    index: "11",
    title: "Calora AI",
    company: "Maven Systems",
    blurb: "Privacy-focused nutrition tracker for Android and desktop.",
    points: [
      "Data stays on the device; AI features work with the user's own API key from any major provider.",
      "Meal photo recognition, a food database with barcode lookup, statistics and three languages.",
    ],
    stack: ["Tauri", "React", "TypeScript", "SQLite"],
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
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Nuxt.js", "Redux Toolkit", "Zustand", "SWR"],
  },
  {
    label: "Styling & UI",
    items: ["HTML", "CSS", "SCSS", "Tailwind CSS", "MUI", "Storybook"],
  },
  {
    label: "Desktop, Mobile & TV",
    items: ["Tauri", "Electron", "React Native", "Kotlin", "Jetpack Compose", "Android TV", "Framework7"],
  },
  {
    label: "Backend & API",
    items: ["Node.js", "Prisma", "PostgreSQL", "REST", "GraphQL", "WebSocket"],
  },
  {
    label: "Data Visualization",
    items: ["amCharts", "D3.js", "Mapbox", "Three.js"],
  },
  {
    label: "AI",
    items: ["OpenAI / Anthropic / Gemini APIs", "DeepSeek", "MediaPipe"],
  },
  {
    label: "Tools",
    items: ["Git", "Linux", "Vite", "Rollup", "Webpack", "Vitest", "Jest"],
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
  "Tauri",
  "Electron",
  "Kotlin",
  "Android TV",
  "PostgreSQL",
  "GraphQL",
  "WebSocket",
  "amCharts",
];
