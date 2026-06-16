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

## Deploy to GitHub Pages (root domain)

This site is served from the root user domain **https://bekhruzvalijonov.github.io/**.
For that, the repository must be named `bekhruzvalijonov.github.io`.

1. Name (or rename) the repo **`bekhruzvalijonov.github.io`** on GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

`vite.config.ts` uses `base: "./"` (relative paths), so the same build works on the
root domain and on a project subpath (`username.github.io/repo`) without changes.
