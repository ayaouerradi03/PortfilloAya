# Aya Ouerradi — Portfolio

Bilingual (FR/EN) portfolio for Aya Ouerradi, AI Product Owner.
Built with React 19, Vite and Tailwind CSS v4.

**Live:** https://soufianetiraoui.github.io/PortfilloAya/

## Local development

```bash
npm install
npm run dev
```

Dev serves on `http://localhost:5173/` (no base path — see below).

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                    |
| `npm run build`   | Type-check (`tsc -b`) then build to `dist/`   |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Lint with oxlint                              |

## Deployment

Deployment is automatic: **every push to `main` publishes the site.**

`.github/workflows/deploy.yml` installs dependencies with `npm ci`, runs the
linter, builds, and uploads `dist/` to GitHub Pages. If the lint or the build
fails, the deploy is skipped and the live site keeps serving the last good
version.

You can also trigger a deploy by hand from the **Actions** tab
(**Deploy to GitHub Pages → Run workflow**) without pushing a commit.

### One-time setup

GitHub Pages must be told to accept deployments from Actions. In the repo:

**Settings → Pages → Build and deployment → Source: `GitHub Actions`**

The first push after that publishes the site. The repository also needs to be
**public** — Pages on a private repository requires a paid GitHub plan.

### The base path

The site is a GitHub Pages *project* page, served from a subdirectory
(`/PortfilloAya/`) rather than the domain root. Vite therefore builds every
asset URL with that prefix — without it the CSS, JS and favicon all 404 on the
live site while working perfectly in local dev.

That prefix is applied to production builds only, so `npm run dev` stays on
`/`. It lives in `vite.config.ts` and can be overridden:

```bash
# Moving to a user page (soufianetiraoui.github.io) or a custom domain:
BASE_PATH=/ npm run build
```

If you rename the repository, update the default in `vite.config.ts` to match
the new name.

## Content

All copy lives in `src/content/` — `fr.ts` and `en.ts`, both typed against
`types.ts`. The shared type is what keeps the two languages in sync: adding a
field to one without the other is a type error, so translations cannot silently
drift.
