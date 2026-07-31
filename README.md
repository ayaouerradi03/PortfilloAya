# Aya Ouerradi — Portfolio

Bilingual (FR / EN) portfolio for **Aya Ouerradi**, AI Product Owner. Liquid-glass UI on a
Dragonfruit `#FF4696` / Night Violet `#1E1033` palette, with an animated gooey gradient background
and a scroll-driven SVG journey line through the experience timeline.

No runtime dependencies beyond React — the whole site ships as one ~77 kB gzip bundle.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Other scripts: `npm run build` (type-check + production build), `npm run preview`, `npm run lint`.

## Editing the content

All copy lives in two mirrored files — **no component needs to be touched to update the CV**:

| File                  | Contents                        |
| --------------------- | ------------------------------- |
| `src/content/fr.ts`   | French copy                     |
| `src/content/en.ts`   | English copy                    |
| `src/content/types.ts` | The shape both files must match |

Because both files are typed against `SiteContent`, adding a field to one and forgetting the other
is a compile error — the two languages cannot drift apart.

### Adding a mission card to an experience

Each experience owns a `tasks` array; every entry renders as one card under the company header.
Add the same entry (same `id`) to `fr.ts` and `en.ts`:

```ts
{
  id: 'sch-new-mission',
  icon: 'target',              // any IconName from src/content/types.ts
  tag: 'Discovery',            // small pill above the title
  title: 'Mission title',
  detail: 'One or two sentences describing the mission.',
  keywords: ['Keyword', 'Keyword'],
}
```

Available icons: `compass`, `flow`, `refresh`, `megaphone`, `target`, `handshake`, `shield`,
`model`, `flask`, `chart`, `board`, `globe`, `users`, `spark`.

### Adding a whole experience

Push a new object onto `experiences` in both language files. The journey line, the milestone dot and
the mission counter all derive from the data — nothing else to wire up.

## Architecture

```
src/
├── App.tsx                  Layer stack: backdrop → content
├── index.css                Design tokens + liquid-glass utilities + journey-node CSS
├── content/                 All copy (fr.ts / en.ts, typed by types.ts)
├── i18n/                    Language provider, persistence, <html lang> syncing
├── hooks/useReveal.ts       One IntersectionObserver per section for scroll reveals
├── lib/glass.ts             Pointer-tracked glass highlight helper
└── components/
    ├── GooeyField.tsx/.css  Animated gooey gradient background
    ├── Backdrop.tsx         Gooey field + grid + vignette + grain
    ├── JourneyLine.tsx      Scroll-driven SVG connector
    ├── ui.tsx               GlassCard, Section, SectionHeading, Chip, Container
    └── …                    One file per section
```

### The liquid glass

`index.css` defines three composable utilities used by every panel:

- `glass` — translucent fill, `backdrop-filter` blur + saturate, and the layered inset shadows that
  make an edge read as a lit bevel.
- `glass-sheen` — a fixed specular band across the top-left (`::before`).
- `glass-lens` — a refraction highlight that follows the pointer (`::after`), fed `--mx` / `--my`
  by `trackGlassPointer`.

Small elements (chips, keyword tags) deliberately do **not** use `backdrop-filter`: the parent panel
already blurs the backdrop, and nesting the two is expensive and paints unreliably.

### Typography

Headings use **Dongle**, body copy uses **Inter**.

Dongle is drawn for Korean, so at a given `font-size` its Latin cap-height is about a third smaller
than Inter's and its default line box is enormous — dropped in as-is, every heading would render
small and float inside a huge gap. It is therefore **self-hosted** (`public/fonts/`, ~50 kB for the
latin + latin-ext subsets) so `@font-face` can correct it:

```css
size-adjust: 176%;      /* matches Dongle's cap-height to Inter's */
ascent-override: 78%;
descent-override: 19%;  /* tames the leading */
```

With those in place every heading size in the design keeps working unchanged. Self-hosting also
removes a third-party request and lets the site render offline. The latin subset covers
`U+0000-00FF`, so French accents (é, è, à, ç, É) render in Dongle rather than falling back
per-glyph.

### The journey line

`JourneyLine` measures its rail, builds a serpentine `path`, then on every scroll frame sets
`strokeDashoffset` so the stroke draws itself forward, moves the glowing head along the curve with
`getPointAtLength`, and publishes progress as `--journey-progress` on `[data-journey-root]`.

Milestone dots read that variable in pure CSS:

```css
--lit: clamp(0, calc((var(--journey-progress, 0) - var(--node-at, 0)) * 26), 1);
```

So scrolling never re-renders React. The component also snaps each dot horizontally onto the curve
(`--node-x`), which is why the dots sit exactly on the line at any width. On phones the rail moves
into the page gutter so it costs no text width.

### The gooey field

`components/GooeyField.tsx` + `GooeyField.css` adapt the gooey-gradient reference for use as a
site-wide background rather than a content wrapper:

- Five blobs drift on CSS keyframes; a sixth eases toward the pointer. Offsets use `vw` / `vh`
  instead of the reference's fixed pixels, so the composition holds at any viewport size.
- Recoloured to the brand palette — dragonfruit, orchid, deep magenta and violet only. A tight
  analogous range reads as deliberate rather than carnival.
- `filter: url(#gooey-merge) blur()` on `.gooey-blobs` **isolates the group**, so the blobs'
  `mix-blend-mode: hard-light` blends them with each other and never with the page. That isolation
  is what keeps it artefact-free under the glass panels above.
- It runs at full strength — nothing dims it. Readability is handled at the other end instead: the
  glass panels are tinted **dark** (`--glass-bg` in `index.css`) rather than the usual white, and
  copy that sits directly on the field rather than on a panel carries more weight.
- The pointer loop is imperative (React never re-renders on mouse move), parks itself once the blob
  has caught up, and restarts on the next move. It also pauses on `visibilitychange`, skips touch
  devices, and is disabled by `prefers-reduced-motion`.
- Below `md`, the SVG goo filter — the expensive part — is dropped in favour of blur alone, since
  the merging is barely distinguishable at phone size.

It renders **behind** the content on purpose: the glass panels' `backdrop-filter` picks the field up
and refracts it, which is where most of the depth in the UI comes from. `Backdrop.tsx` then layers a
grid, a vignette and film grain over it — the vignette is what keeps body copy legible when a bright
blob drifts under a text block.

## Accessibility & behaviour notes

- `prefers-reduced-motion` disables the reveals and the gooey animation, and draws the journey line
  complete rather than tying it to scroll.
- The language choice persists in `localStorage` and falls back to the browser locale; `<html lang>`,
  `<title>` and the meta description all follow it.
- Section anchors account for the sticky header via `scroll-padding-top`.
