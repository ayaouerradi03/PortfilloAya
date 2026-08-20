# Aya Ouerradi — Portfolio

Bilingual (FR/EN) portfolio for Aya Ouerradi, AI Product Owner.
Built with React 19, Vite and Tailwind CSS v4.

**Live:** https://ayaouerradi03.github.io/PortfilloAya/

The URL follows whichever account hosts the repository; the build adapts to it
automatically (see [The base path](#the-base-path)).

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

### ⚠️ Required one-time setup (repository admin only)

**Before the first deploy can succeed, an admin of the repository must set the
Pages source to Actions:**

> **Settings → Pages → Build and deployment → Source: `GitHub Actions`**
>
> Not `Deploy from a branch`.

The repository must also be **Public**, unless the account is on a paid plan.

> **Why the distinction matters.** With Source left on *Deploy from a branch*,
> GitHub serves the repository **as-is** — the unbuilt `index.html`, whose only
> script tag points at `/src/main.tsx`. Browsers will not execute raw
> TypeScript, so React never mounts and the site renders as a **blank page**
> that still returns HTTP 200. There is no error in the console pointing at the
> cause, and `package.json`, `vite.config.ts` and `src/` end up publicly
> served. Only a deploy from this workflow publishes the built `dist/`.

This cannot be automated. The workflow does attempt it (`configure-pages` runs
with `enablement: true`), but creating a Pages site requires repo-admin rights
that the Actions `GITHUB_TOKEN` cannot be granted — the API rejects it with
*"Resource not accessible by integration"*. Collaborators without admin rights
cannot do it either; it has to be the owner.

Until it is done, every run fails at the **Check Pages is enabled** step, which
prints these instructions in the log. Once done, re-run the workflow from the
Actions tab — no code change is needed, and all later pushes deploy on their
own.

### The base path

A GitHub Pages *project* page is served from a subdirectory (`/<repo-name>/`)
rather than the domain root, so every built asset URL needs that prefix.
Without it the CSS, JS and favicon all 404 on the live site while working
perfectly in local dev.

The workflow derives the prefix from the repository itself rather than
hardcoding it, so **renaming the repo or transferring it to another account
needs no change here** — the next deploy just picks up the new name. A
`<owner>.github.io` repository is a user page served from the root, and is
handled as a special case.

The prefix applies to production builds only, so `npm run dev` stays on `/`.
Building locally uses the default in `vite.config.ts`, which can be overridden:

```bash
BASE_PATH=/ npm run build            # user page or custom domain
BASE_PATH=/some-other-name/ npm run build
```

If you rename the repository, update the default in `vite.config.ts` to match
the new name.

## Content

All copy lives in `src/content/` — `fr.ts` and `en.ts`, both typed against
`types.ts`. The shared type is what keeps the two languages in sync: adding a
field to one without the other is a type error, so translations cannot silently
drift.
