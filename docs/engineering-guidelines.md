# Engineering guidelines

## Stack

- Next.js 16 / App Router
- React 19
- TypeScript strict mode
- CSS Modules with global design tokens

## Architecture overview

- `src/app/` contains route files, metadata routes, and app-level styles
- `src/content/` contains typed content structures for the landing page
- `docs/` contains product, workflow, and engineering rules

## Folder structure rules

- keep route-level code under `src/app/`
- keep reusable typed content/config under `src/content/`
- add shared UI components under `src/components/` only when reuse becomes real
- avoid deep nesting for a simple marketing site

## Coding rules

- favor explicit names over generic helpers
- prefer simple components over abstractions
- avoid duplication where reasonable
- avoid `any` unless there is a strong reason
- document non-obvious decisions

## Styling rules

- use global CSS only for tokens, resets, and app-wide primitives
- use CSS Modules for page/component-specific styles
- prefer consistent tokens over one-off values

## SEO / performance expectations

- clear metadata and canonical URL
- baseline Open Graph / Twitter metadata
- `robots.ts` and `sitemap.ts`
- lean dependency set
- default to server components unless client interactivity is actually needed
