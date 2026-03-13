# Branching and PRs

## Branching rules

- `main` stays releasable
- do not work directly on `main` for feature work
- use short-lived focused branches
- one branch should represent one coherent workstream

## Branch naming

- `feat/<scope>`
- `fix/<scope>`
- `docs/<scope>`
- `chore/<scope>`

Examples:

- `feat/landing-page-foundation`
- `fix/mobile-spacing`
- `docs/update-product-scope`

## Commit rules

Use conventional commits:

- `feat:` user-facing functionality
- `fix:` bug fixes
- `docs:` documentation
- `chore:` tooling / maintenance
- `refactor:` internal restructuring without behavior change

Keep commits small and reviewable.

## PR rules

Each PR should include:

- summary
- what changed
- why
- risks / tradeoffs
- validation performed
- follow-up work if known

## Review expectations

- changes should support the business goal
- copy should remain honest and non-fabricated
- docs should be updated when expectations change
- unrelated work should not be bundled into the same PR
