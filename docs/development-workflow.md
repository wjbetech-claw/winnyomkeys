# Development workflow

## Local setup

```bash
git clone https://github.com/wjbetech-claw/winnyomkeys.git
cd winnyomkeys
npm ci
npm run dev
```

## Branch rules

- `main` stays protected and releasable
- Feature work happens on short-lived branches
- One branch should represent one coherent workstream

## Commit rules

Use conventional commits:

- `feat:` user-facing functionality
- `fix:` bug fixes
- `docs:` documentation
- `chore:` tooling / maintenance
- `refactor:` internal restructuring without behavior change

Keep commits small enough to review quickly.

## PR rules

Every PR should include:

- concise summary
- key file areas changed
- reason for the change
- risks / tradeoffs
- validation performed
- follow-up items if known

## Validation rules

Run before push:

```bash
npm run validate
```

That currently verifies:

- formatting consistency
- lint health
- type safety
- production build success

## CI expectations

GitHub Actions must enforce the same core validation as local development.

## Testing strategy

Current repo maturity does not justify a broad test suite yet.

For now:

- rely on lint + typecheck + build as baseline safety nets
- manually verify responsive layout and content quality
- add tests later where behavior becomes non-trivial (forms, interactive logic, content rendering utilities)

## Keep changes reversible

- prefer focused PRs
- do not mix unrelated refactors with product work
- document non-obvious choices in `docs/`
- avoid unnecessary dependencies

## Troubleshooting

### Fresh install issues

Delete `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build failures after metadata changes

Run:

```bash
npm run typecheck
npm run build
```

Most issues will surface clearly there.
