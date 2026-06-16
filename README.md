# Bekhruz Valijonov — Portfolio

A modern, single-page developer portfolio. Dark "technical editorial" aesthetic with a lime accent, large display typography, custom cursor glow, film grain, blueprint grid and scroll-triggered reveals.

## Stack

- **React 19** + **TypeScript**
- **Vite** (build tooling)
- **Tailwind CSS v4** (styling, design tokens in `src/index.css`)
- **Motion** (animations)
- Fonts: Fraunces · Hanken Grotesk · JetBrains Mono

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the built site
```

## Editing content

All text lives in **`src/data.ts`** — profile, experience, projects, skills, education and languages. Edit there; no component changes needed.

Section components are in `src/components/` (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Footer`, …).

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `BekhruzValijonov/portfolio`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

`vite.config.ts` uses `base: "./"` (relative paths), so it works on both
`username.github.io` and `username.github.io/repo` without changes.
