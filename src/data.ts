export const profile = {
  name: "Bekhruz Valijonov",
  role: "Software Engineer",
  location: "Tashkent, Uzbekistan",
  email: "valijonovbekhruz@gmail.com",
  phone: "+998 (99) 044-36-44",
  github: "https://github.com/BekhruzValijonov",
  githubLabel: "github.com/BekhruzValijonov",
  linkedin: "https://www.linkedin.com/in/bekhruz-valijonov-95917b237",
  linkedinLabel: "in/bekhruz-valijonov",
  available: true,
  summary:
    "I work on an electronic queue ecosystem that serves millions of people across the country: 13 applications on one shared UI kit and client SDK, running on kiosks, Android TV boxes, Windows, macOS and Linux desktops and phones, in 6 languages. My part ranges from the reception desktop and the native TV board to the update server that keeps the whole device fleet current, Bluetooth firmware updates for sensors, and a booking platform with 182 API endpoints. In 2026 I founded Maven Systems and shipped its first product on Google Play.",
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
      "Develop the IQueue electronic queue ecosystem: 13 applications across kiosks, TV boards, operator and reception workstations and a real-time admin panel, sharing one UI kit and client SDK.",
      "Own the reception desktop (Windows, macOS, Linux, Android; 173 automated tests) and the native Android TV board (Kotlin, 131 tests, 6 languages) end to end.",
      "Built the over-the-air update server and the version-blocking policy that keep hundreds of unattended devices on supported builds without a technician visit.",
      "Designed and built Qabul, a multi-tenant booking and live-queue platform: 33 data models, 182 endpoints, business portal, admin console, client and scanner apps.",
      "Work with hardware: 80 mm thermal printers, TV boxes, LED displays, face detection at the kiosk and firmware flashing over Bluetooth with per-sector checksums.",
    ],
  },
  {
    company: "Maven Systems",
    role: "Founder & Lead Developer",
    location: "Tashkent",
    period: "2026 — Present",
    current: true,
    points: [
      "Founded the company and shipped Calora AI on Google Play: a local-first nutrition tracker with no backend, a 7,800-item food catalog and support for six AI providers.",
      "Own everything from product decisions to three native Android plugins, the data pipeline, store listing and releases.",
    ],
  },
  {
    company: "Imaan-Tech",
    role: "Frontend Developer · Freelance",
    location: "Remote",
    period: "Jan 2026 — May 2026",
    points: [
      "Built a gamified learning app on my own: 23 screens, AI speaking evaluation with audio recording, a voice-reactive 3D tutor on custom shaders.",
      "In the admin dashboard, delivered the finance modules, access control for three roles and localization into three languages.",
    ],
  },
];

export type ProjectGroup = { company: string; title: string; caption: string };

/** Projects section is split into these groups, in this order. */
export const projectGroups = [
  { company: "Leerybit", title: "Leerybit", caption: "Electronic queue ecosystem, booking platform, camera network and IoT tools." },
  { company: "Maven Systems", title: "Maven Systems", caption: "My own company. Everything here is mine end to end." },
  { company: "Imaan-Tech", title: "Imaan-Tech", caption: "Learning platform, freelance." },
] as const satisfies readonly ProjectGroup[];

import projectImages from "./projectImages.json";

export type ProjectImage = { src: string; thumb: string; alt: string; w: number; h: number };

/** Screens for a project, keyed by the folder name under public/projects. */
export const galleries: Record<string, ProjectImage[]> = projectImages;

export type Project = {
  index: string;
  title: string;
  /** Must name one of `projectGroups`, otherwise the project would never render. */
  company: (typeof projectGroups)[number]["company"];
  blurb: string;
  points: string[];
  stack?: string[];
  /** Key into `galleries`; the card shows those screens as a strip and a lightbox. */
  gallery?: keyof typeof projectImages;
  links?: { label: string; href: string }[];
  note?: string;
  credentials?: { role: string; login: string; password: string }[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Electronic Queue Ecosystem",
    gallery: "queue-ecosystem",
    company: "Leerybit",
    blurb:
      "One system that takes a person from a ticket at the kiosk to a called number on the TV board and a finished visit at the desk, running unattended in halls across the country.",
    points: [
      "13 applications on one UI kit and client SDK: kiosks, TV boards, operator and reception workstations, a launcher and an admin panel, in 6 languages including Karakalpak.",
      "Every screen in the hall is live: a ticket issued, called or finished reaches kiosks, boards, desks and dashboards through one event bus within a second.",
      "One installed binary becomes a kiosk, TV board, operator console, feedback pad or manager screen depending on the device it lands on, on Windows, Linux and macOS.",
      "Devices run for years without a technician: they reconnect after network drops, resync after sleep, update themselves over the air and stop running builds that were blacklisted.",
    ],
  },
  {
    index: "02",
    title: "Reception Desktop",
    gallery: "reception",
    company: "Leerybit",
    blurb:
      "The front-desk view of the whole hall: who is waiting, who is being served and for how long, ticket issuing and every operator's shift history in one window.",
    points: [
      "Built for a desk that stays open all day: a native watcher detects the network coming back and the app repairs its queue state on its own; after 30 seconds asleep it reconnects in full.",
      "Queue state is patched live from events and fully resynced every 5 minutes, so lost messages and the midnight rollover never leave stale tickets on screen.",
      "Timers for hundreds of tickets tick every second without re-rendering the page, and turn amber and red as planned service time runs out.",
      "Native device identity plugin for desktop and Android, Gantt and serpentine shift charts, Ctrl+K search; 173 automated tests, 15 releases.",
    ],
  },
  {
    index: "03",
    title: "Android TV Queue Board",
    gallery: "tv-board",
    company: "Leerybit",
    blurb:
      "The board people watch while they wait: called numbers, video playlist and branding on inexpensive TV boxes with weak Wi-Fi. Rewritten natively for Android TV.",
    points: [
      "Never misses a call: a 40-second heartbeat detects silently dead connections, reconnects with backoff, and every new event cancels and restarts the refresh in flight.",
      "Looks identical on 32-inch and 75-inch screens: the web board's scale rules were ported one to one into the native layout, ignoring the box's font settings.",
      "Reads branding themes pushed from the server, keeps a stable device identity even when Android hides the hardware address, starts on boot; 131 unit tests.",
    ],
  },
  {
    index: "04",
    title: "Real-time Admin & Analytics",
    gallery: "admin",
    company: "Leerybit",
    blurb:
      "Where the network is run: live and historical statistics down to a single location, and remote control of every device in the field.",
    points: [
      "Update server for the fleet: one zip upload releases a version to every device; downloads resume from where they stopped and are throttled per server so hundreds of devices never choke one link.",
      "Kiosk menu editor: a tree of service sections with drag-and-drop ordering and cascading removal, applied to a location instantly and covered by unit tests.",
      "Exchange-rate rules by country, region, city, district or location with validity windows, where the most specific rule wins; an editor for operator scenarios.",
      "A map that drills from country to district with region statistics computed off the main thread, 9 user roles and 6 interface languages.",
    ],
  },
  {
    index: "05",
    title: "Online Booking & Live Queue",
    company: "Leerybit",
    blurb:
      "A booking platform where people reserve a time, check in with a QR code and watch their place in the queue move on their phone.",
    points: [
      "Designed end to end: 33 data models, an API with 182 endpoints, business portal with 33 pages, admin console, client app and front-desk scanner.",
      "Multi-tenant from day one: any number of businesses share one installation, and every query is scoped to the organization from the token.",
      "Queue position is pushed to the phone the moment it changes; slots respect service duration, preparation and cleanup time and working hours in the business's own timezone.",
      "Short-lived tokens with rotation, single-use check-in codes without look-alike characters, and time-limited support access where every action is audited.",
    ],
  },
  {
    index: "06",
    title: "Self-service Kiosks",
    gallery: "kiosks",
    company: "Leerybit",
    blurb:
      "Touch terminals where the visit starts: choose a service, get a printed ticket, redeem a booking, rate the visit.",
    points: [
      "Delivered a fully branded kiosk edition on my own: booking-code keypad, wait-time estimates grouped across related services, 80 mm inverted thermal printing, 6 languages.",
      "Visitor photo capture with on-device face detection that picks the face nearest the centre and zooms to it, so the operator sees who is coming.",
      "Services can be limited by hours, weekdays and daily quota, and a ticket printed at reception carries the reason and operator it was issued for.",
    ],
  },
  {
    index: "07",
    title: "Operator Workstation",
    gallery: "operator",
    company: "Leerybit",
    blurb:
      "The tool an operator uses hundreds of times a day to call, serve, redirect and finish visitors, with the allowed flow enforced by a state machine.",
    points: [
      "Added the shift timeline, a service timer against planned time, automatic work-time logging on login and logout, and a client data form.",
      "Hardened the action queue: scenario timeouts, action constraints, and fixes so delayed actions keep their data and fast double clicks never stall the operator.",
    ],
  },
  {
    index: "08",
    title: "Hardware & Field Tools",
    gallery: "field",
    company: "Leerybit",
    blurb:
      "Software that meets the physical world: sensors in the field, firmware updates over the air, remote valves and industrial protocols.",
    points: [
      "Firmware flashing over Bluetooth: the image goes out in 4 KB sectors of 510-byte packets, each sector verified by a checksum before the next one is sent, so packet loss never bricks a device.",
      "A mobile inspection app that scans sensors and tracks the route in a background service, stores everything locally and syncs when a connection appears.",
      "A dashboard for remote valve control with live device events, and a configurator for Modbus registers with byte and word order.",
    ],
  },
  {
    index: "09",
    title: "Traffic Camera Network Console",
    company: "Leerybit",
    blurb:
      "Operations console for a camera network that records about 2 million vehicle passes a day.",
    points: [
      "Archive exports of any slice of that traffic, filtered by camera, minute, plate pattern, lane and speed, with job progress streamed live from queued to finished.",
      "A live productivity board for moderators that applies every verdict as it happens and corrects the hourly counts when a verdict is revised.",
      "A device verification workflow with attachments and history, and a log-scale chart that fits millions of passes and thousands of violations on one axis.",
    ],
  },
  {
    index: "10",
    title: "UI Kit & Client SDK",
    company: "Leerybit",
    blurb:
      "The foundation every app in the ecosystem is built on: about 60 components, an application framework and a client SDK, consumed by 13 products.",
    points: [
      "Access control built into the framework: roles and attributes, login form, automatic token refresh and guards that stop users from leaving unsaved pages.",
      "A colour picker that generates a full Material palette from one colour, wavy progress indicators and event timeline charts.",
      "Video playback that recovers from hardware decoder failures on TV boxes, and a Material 3 library with 157 stories and about 2,000 tests whose CI fails on a single console error.",
    ],
  },
  {
    index: "11",
    title: "Calora AI",
    gallery: "calora",
    company: "Maven Systems",
    blurb:
      "A nutrition tracker that keeps everything on the phone: no account, no backend, no analytics. AI runs on the user's own provider and key.",
    points: [
      "Four ways to log a meal: photo recognition, barcode lookup with an offline cache, a 7,800-item food catalog or a saved meal, and every AI result is a draft the user confirms.",
      "Six AI providers or a built-in model, with keys kept in the phone's secure storage and never in the database or an export.",
      "Three native Android plugins written for this app: camera, screen insets and secure storage.",
      "Statistics that explain themselves: every number comes with the reason behind it and one thing to do about it, computed on the device.",
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=ai.calora.tracker" },
      { label: "bekhruzvalijonov.github.io/calora-info", href: "https://bekhruzvalijonov.github.io/calora-info/" },
    ],
  },
  {
    index: "12",
    title: "Learning App & AI Practice",
    company: "Imaan-Tech",
    blurb:
      "A gamified language-learning app: courses, timed homework, vocabulary drills, leaderboards with leagues and AI tutors that listen and read. Built on my own.",
    points: [
      "Speaking practice that records the learner, returns a band score, feedback and a transcript.",
      "A voice-reactive 3D tutor: the microphone signal is filtered and analysed in real time and drives custom shaders, so the sphere moves with the learner's voice.",
      "23 screens, sign-up and password reset over SMS codes, and all user and course data loaded in parallel before a page renders.",
    ],
  },
  {
    index: "13",
    title: "Learning Platform Back Office",
    company: "Imaan-Tech",
    blurb:
      "Multi-tenant admin dashboard with about 58 screens: organisations, groups, lessons, attendance, homework, finance and cameras.",
    points: [
      "Owned the money side: salaries and payouts, expenses, billing and leave tracking, with Excel export.",
      "Built the access matrix for three roles and localization into three languages, about 1,800 strings each.",
    ],
  },
];

export type SkillGroup = { label: string; text: string; tools: string[] };

/** How I work: each area is a decision and the reason behind it, tools listed second. */
export const skills: SkillGroup[] = [
  {
    label: "Desktop",
    text: "Tauri when the app needs a small binary and native code next to the UI: a Rust thread that watches the network, a device-identity plugin, builds for Windows, macOS, Linux and Android from one repo. Electron where the app has to talk to USB thermal printers and serial ports through Node.",
    tools: ["Tauri 2", "Rust", "Electron", "electron-updater", "ESC/POS"],
  },
  {
    label: "Mobile & TV",
    text: "A web UI in a Tauri shell with Kotlin plugins when that is enough: Bluetooth scanning in a foreground service, camera, secure storage. Fully native Kotlin and Compose when it must run 24/7 on a low-end TV box and recover from decoder and network failures on its own.",
    tools: ["Kotlin", "Jetpack Compose", "Media3", "Ktor", "Android BLE", "Framework7"],
  },
  {
    label: "Web applications",
    text: "React and TypeScript everywhere, Next.js for admin panels that need server routes next to the pages. Large admin surfaces are generated from schemas and role matrices rather than hand-written screen by screen, and every string goes through i18n from day one.",
    tools: ["React 19", "TypeScript", "Next.js", "Vite", "Tailwind", "Zustand", "amCharts", "ECharts"],
  },
  {
    label: "Real-time & data",
    text: "A snapshot over GraphQL, then patches from an event bus over WebSocket, with a periodic full resync to heal lost messages. Timers and counters that update every second are written to the DOM directly so hundreds of them never re-render the page.",
    tools: ["WebSocket", "GraphQL", "Socket.IO", "gql-query-builder"],
  },
  {
    label: "Backend & APIs",
    text: "NestJS with Prisma on PostgreSQL. Multi-tenancy by scoping every query to the organization in the token, short-lived access tokens with rotated refresh tokens, background jobs in a queue when Redis is there and inline when it is not.",
    tools: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker"],
  },
  {
    label: "Offline & sync",
    text: "Local-first where the network cannot be trusted: SQLite on the device for a product with no backend, PouchDB with two-way CouchDB replication for field apps, and a policy that limits how long a device may stay offline.",
    tools: ["SQLite", "PouchDB", "CouchDB", "IndexedDB"],
  },
  {
    label: "Hardware",
    text: "Thermal printers over USB, LED displays over RS485, sensors over Bluetooth, firmware flashing in checksummed sectors, face detection at the kiosk. I read the protocol document first and write the transport myself when no library fits.",
    tools: ["Web Bluetooth", "BLE", "RS485", "Modbus", "MediaPipe", "CRC-16"],
  },
  {
    label: "Platform & quality",
    text: "Shared UI kit and client SDK with per-module tree shaking, stories for every component and CI gates that fail on a single console error. Vitest with Testing Library for behaviour, not snapshots; TypeScript strict so a missing translation key does not compile.",
    tools: ["Storybook", "Vitest", "Testing Library", "Rollup", "GitLab CI", "GitHub Actions"],
  },
  {
    label: "AI in products",
    text: "Provider-agnostic: one registry entry per provider, the user's own key kept in the OS secure store, every model answer treated as a draft the user confirms. Audio and photo pipelines on the client, with retries and model fallbacks when a provider fails.",
    tools: ["OpenAI", "Anthropic", "Gemini", "OpenRouter", "Ollama", "Web Audio"],
  },
];

export const education = [
  { school: "PDP Academy", program: "Frontend Development", period: "Sep 2022 — Aug 2023" },
  { school: "Netology · Online", program: "Advanced Frontend", period: "Jan 2023 — May 2023" },
];

/** Short "what it's like to work with me" statements, shown right under the hero. */
export const principles = [
  {
    title: "Products used by millions.",
    text: "A queue ecosystem of 13 applications running across the country, where a bug is felt in a hall within minutes.",
  },
  {
    title: "Real time, everywhere.",
    text: "One event bus keeps kiosks, boards, desktops and dashboards on the same second, with 5-minute resyncs to heal anything lost.",
  },
  {
    title: "Hardware in the loop.",
    text: "Thermal printers, TV boxes, LED displays, face detection at the kiosk and firmware updates over Bluetooth.",
  },
  {
    title: "Platform, not just screens.",
    text: "A shared UI kit and client SDK, an update server for the whole fleet, and performance work every app depends on.",
  },
];

/** What I'm doing right now, shown next to the summary in About. */
export const now = [
  { label: "Working on", value: "IQueue at Leerybit", detail: "Electronic queue ecosystem used across the country" },
  { label: "Building", value: "Calora AI at Maven Systems", detail: "Privacy-first nutrition tracker" },
  { label: "Based in", value: "Tashkent", detail: "UTC+5, remote-friendly" },
  { label: "Open to", value: "Contract & freelance work", detail: "Web, desktop, mobile" },
];
