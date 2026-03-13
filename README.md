# WinnyomKeys

A production-minded landing page for a Seoul-based mechanical keyboard repair, build, and mod service.

## What this repo contains

- A lean Next.js + TypeScript marketing site
- Product and technical docs under [`docs/`](./docs)
- Basic engineering guardrails for formatting, linting, types, and build health
- A simple CI workflow that blocks obvious regressions

## Product goal

Help visitors quickly understand:

- what WinnyomKeys offers
- who the service is for
- how the process works
- how to get in touch

The site should feel premium, calm, trustworthy, and maintainable.

## Stack

- Next.js 16
- React 19
- TypeScript (strict)
- ESLint
- Prettier
- GitHub Actions CI

## Getting started

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm run validate
```

## Workflow expectations

- Never work directly on `main` for feature work
- Use focused feature branches
- Keep commits reviewable and use conventional commit messages
- Run `npm run validate` before pushing
- Document meaningful decisions in `docs/`

## Documentation

- [Project overview](./docs/project-overview.md)
- [Technical architecture](./docs/technical-architecture.md)
- [Development workflow](./docs/development-workflow.md)
- [Content strategy](./docs/content-strategy.md)

## Launch checklist

Before launch, replace placeholders with real business data:

- contact email / inquiry channel
- production domain confirmation
- final copy refinements
- legal/privacy requirements if needed
- real metadata/social preview assets
