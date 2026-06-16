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
    "Frontend / Full-Stack Developer building production web, desktop and mobile applications with React, TypeScript, Next.js, Electron, Tauri and React Native. I care about scalable frontend architecture, real-time dashboards, interactive data visualization, WebSocket flows and clean cross-platform delivery.",
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
    company: "Planix",
    role: "Full-Stack Developer · Personal Project",
    location: "Personal Project",
    period: "2026",
    points: [
      "Solo full-stack personal project — designed, built and shipped both the backend and the cross-platform client myself.",
      "Built the backend on Cloudflare Workers with Hono, R2 object storage, a database layer, scheduled cron jobs and web push notifications.",
      "Integrated Claude LLM models for AI features and implemented Google / Gmail OAuth login.",
      "Developed the cross-platform client with Tauri and Framework7.",
    ],
    stack: [
      "Cloudflare",
      "Hono",
      "Claude LLM",
      "R2",
      "Database",
      "Cron",
      "Web Push",
      "Google OAuth",
      "Tauri",
      "Framework7",
      "AI",
    ],
  },
  {
    company: "Leerybit",
    role: "Frontend Developer",
    location: "Tashkent",
    period: "Oct 2023 — Jun 2026",
    current: false,
    points: [
      "Developed and maintained production frontend features with React, TypeScript, JavaScript and modern tooling.",
      "Built reusable UI components and scalable application modules to keep product interfaces consistent.",
      "Implemented dashboards, API-driven interfaces and client-side data transformation for complex operational data.",
      "Built WebSocket-based real-time updates for queue, ticket and dashboard systems.",
      "Investigated production issues, refactored legacy frontend logic and optimized rendering performance.",
    ],
  },
  {
    company: "Imaan-Tech",
    role: "Frontend Developer · Freelance",
    location: "Remote",
    period: "Jan 2026 — May 2026",
    points: [
      "Engineered a web-based educational platform end to end — admin dashboard and student-facing portal — with reusable frontend flows, responsive UI sections and API-connected screens.",
      "Built large multi-module admin interfaces: student finance, teacher salaries, payouts, expenses, KPI dashboards, reports, branches, users and parent management.",
      "Developed student-facing pages — dashboard, payments, attendance history, XP progress, rating, profile and settings — with consistent, reusable components.",
      "Integrated AI-powered learning tools (AI Chat, Explain, Speaking, Writing and ChatGPT-based assistant flows) into the student experience.",
      "Implemented Face ID attendance UI with camera-access and GPS permission handling, plus camera dashboards and live/AI video analysis features.",
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
      "Built interfaces for student finance, teacher salaries, payouts, expenses, KPI dashboards, rewards, market orders, reports, branches, users and parent management.",
      "Implemented dashboard cards, date filters, refresh actions, empty states, export-to-Excel and structured navigation for a large multi-module admin system.",
      "Contributed to camera features — camera dashboards, live camera analysis, AI video analysis and Face ID device management.",
    ],
    stack: ["React", "TypeScript", "REST API", "Admin Panel", "Dashboard UI", "Responsive"],
    links: [{ label: "admin.imaantech.uz", href: "https://admin.imaantech.uz" }],
    credentials: [{ role: "Admin", login: "+998940962906", password: "string" }],
  },
  {
    index: "02",
    title: "Student Web Portal & AI Tools",
    company: "Imaan-Tech",
    blurb: "Student-facing side of an education-management ecosystem, with AI-powered learning tools.",
    points: [
      "Built student pages: dashboard, payments, attendance history, XP progress, rating, AI assistant, profile and settings.",
      "Developed AI learning tools — AI Chat, Explain, Speaking, Writing, Responses and ChatGPT-based assistant flows.",
      "Implemented Face ID attendance UI with camera-access flow, GPS permission handling and attendance status feedback.",
    ],
    stack: ["React", "TypeScript", "REST API", "AI / LLM", "Face ID", "Responsive"],
    links: [{ label: "edu.imaantech.uz", href: "https://edu.imaantech.uz" }],
    credentials: [{ role: "Student", login: "+998200272727", password: "string" }],
  },
  {
    index: "03",
    title: "Enterprise Queue Management System",
    company: "Leerybit",
    blurb: "Large-scale platform for customer flow, operator workflows and service processes.",
    points: [
      "Designed user-facing features for operational visibility and real-time monitoring.",
      "Built reporting, analytics, filtering and monitoring tools for high-volume operational data.",
    ],
    stack: ["React", "TypeScript", "WebSocket", "amCharts", "Redux Toolkit"],
  },
  {
    index: "04",
    title: "Android TV / Kiosk Applications",
    company: "Leerybit",
    blurb: "Queue management and public information displays for TV & kiosk hardware.",
    points: [
      "Built media scheduling, content updates and offline fallback behavior.",
      "Implemented remote-control navigation workflows for large-screen displays.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android TV", "WebView"],
  },
  {
    index: "05",
    title: "Electron Desktop Launcher",
    company: "Leerybit",
    blurb: "Linux desktop launcher with update handling and deployment workflows.",
    points: [
      "Implemented update handling, relaunch logic and deployment workflows.",
      "Solved AppImage-specific debugging and packaging challenges.",
    ],
    stack: ["Electron", "Node.js", "Linux", "AppImage"],
  },
  {
    index: "06",
    title: "Plant AI Application",
    company: "Personal Project",
    blurb: "AI-powered plant identification and care with image analysis & disease detection.",
    points: [
      "Designed image analysis, disease detection and care-reminder flows.",
      "Planned AI response structure for diagnosis, care schedules and recommendations.",
    ],
    stack: ["React", "TypeScript", "Tauri", "AI Vision API", "LLM"],
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
    items: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Auth Flows", "JWT"],
  },
  {
    label: "Desktop & Mobile",
    items: ["Electron", "Tauri", "React Native", "Kotlin", "Jetpack Compose", "Android WebView", "Android TV"],
  },
  {
    label: "Tools & Infra",
    items: ["Git", "GitHub", "Linux", "Bash", "Webpack", "Vite", "Rollup", "Storybook", "ESLint", "Prettier"],
  },
  {
    label: "AI & Integrations",
    items: ["OpenAI API", "Vision APIs", "LLM Integrations", "Image Analysis"],
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
  "amCharts",
  "D3.js",
  "Node.js",
  "Tailwind",
  "Real-Time Dashboards",
];
