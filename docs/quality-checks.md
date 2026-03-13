# Quality checks

## Baseline validation

Run before push:

```bash
npm run validate
```

This verifies:

- formatting consistency
- lint health
- type safety
- production build success

## CI expectation

GitHub Actions should enforce the same core checks run locally.

## Testing strategy

Current repo maturity does not justify a broad automated test suite yet.

For now:

- rely on format/lint/type/build as the baseline safety net
- manually verify responsive layout and content quality
- add automated tests later when behavior becomes more interactive or stateful

## Reversibility rules

- prefer small PRs
- avoid mixing unrelated refactors with product work
- avoid unnecessary dependencies
- document non-obvious decisions in `docs/`
