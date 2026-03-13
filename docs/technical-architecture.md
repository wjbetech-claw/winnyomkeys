# Technical architecture

## Chosen stack

- **Next.js 16 / App Router**: lean, production-ready React framework with first-class metadata, routing, and deployment flexibility.
- **React 19**: current React baseline.
- **TypeScript strict mode**: reduces ambiguity and future maintenance risk.
- **CSS Modules + global tokens**: enough structure for a polished landing page without adding a styling framework too early.

## Architecture overview

This repo is intentionally small:

- `src/app/` contains route files, global CSS, and metadata routes
- `src/content/` contains typed content structures used by the landing page
- `docs/` contains product, workflow, and architecture rules

This keeps product content easy to update without introducing premature abstractions.

## Folder structure rules

- Keep route-level code under `src/app/`
- Keep reusable typed content/config under `src/content/`
- Add shared UI components under `src/components/` only when they are reused meaningfully
- Avoid deep nesting for a simple marketing site

## Styling conventions

- Use global CSS only for tokens, resets, and app-wide primitives
- Use CSS Modules for page/component-specific styling
- Prefer design tokens and consistent spacing over one-off values
- Keep motion subtle and purposeful

## Component conventions

- Favor explicit names over generic helpers
- Prefer simple presentational components
- Avoid abstraction until repetition is real
- Keep each file focused and readable

## Accessibility expectations

- Semantic headings and section structure
- Keyboard-visible focus states
- Sufficient color contrast
- Real text, not text baked into images
- Link/button usage should match behavior

## SEO expectations

- Clear page title and description
- Canonical URL
- Open Graph/Twitter metadata baseline
- `robots.ts` and `sitemap.ts`
- Honest copy aligned with real business offering

## Performance expectations

- Keep dependencies lean
- Avoid large client-side libraries for static marketing concerns
- Default to server components unless interactivity is required
- Optimize images/assets if added later

## Responsive design expectations

- Mobile-first layouts
- Clean spacing at common phone widths
- No horizontal overflow
- CTA clarity preserved at every viewport
