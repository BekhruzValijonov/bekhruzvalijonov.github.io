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
};

export const experience: Experience[] = [
  {
    company: "Leerybit",
    role: "Frontend Developer",
    location: "Tashkent",
    period: "Oct 2023 — Present",
    current: true,
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
      "Engineered a web-based educational platform with reusable frontend flows, responsive UI sections and API-connected screens.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  blurb: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Enterprise Queue Management System",
    blurb: "Large-scale platform for customer flow, operator workflows and service processes.",
    points: [
      "Designed user-facing features for operational visibility and real-time monitoring.",
      "Built reporting, analytics, filtering and monitoring tools for high-volume operational data.",
    ],
    stack: ["React", "TypeScript", "WebSocket", "amCharts", "Redux Toolkit"],
  },
  {
    index: "02",
    title: "Android TV / Kiosk Applications",
    blurb: "Queue management and public information displays for TV & kiosk hardware.",
    points: [
      "Built media scheduling, content updates and offline fallback behavior.",
      "Implemented remote-control navigation workflows for large-screen displays.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android TV", "WebView"],
  },
  {
    index: "03",
    title: "Electron Desktop Launcher",
    blurb: "Linux desktop launcher with update handling and deployment workflows.",
    points: [
      "Implemented update handling, relaunch logic and deployment workflows.",
      "Solved AppImage-specific debugging and packaging challenges.",
    ],
    stack: ["Electron", "Node.js", "Linux", "AppImage"],
  },
  {
    index: "04",
    title: "Plant AI Application",
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
