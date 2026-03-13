# Contributing

## Branch naming

Use focused branch names:

- `feat/<scope>`
- `fix/<scope>`
- `docs/<scope>`
- `chore/<scope>`

Examples:

- `feat/landing-page-foundation`
- `fix/hero-spacing`
- `docs/workflow-rules`

## Commit messages

Use conventional commits:

- `feat: add landing page service sections`
- `fix: tighten mobile spacing in hero`
- `docs: add v1 definition of done`
- `chore: add CI validation workflow`

## Pull requests

PRs should stay focused and explain:

- what changed
- why it changed
- risks or tradeoffs
- validation performed
- follow-up work

## Local validation before push

```bash
npm run validate
```

## Review checklist

- Does the change support the business goal?
- Is the UI accessible and responsive?
- Are names and file boundaries clear?
- Is the copy honest and non-fabricated?
- Were docs updated if expectations changed?
