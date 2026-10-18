# Day 6 — Async TypeScript and application boundaries

Run only this day: `bun run test:day-06`

## How to use this day
1. Read each exercise header.
2. Implement the async function/type in the same file.
3. Run `bun run test:day-06`.
4. Fix compiler and test feedback.

## Exercises
1. `fetch-user.ts` — typed async returns and validation
2. `retry.ts` — retrying async work
3. `dto-mapping.ts` — DTO and domain mapping
4. `boundary-validation.ts` — runtime validation
5. `result-error-handling.ts` — Result types and errors

## Tips
- Inject fetchers and clocks for testability.
- Validate at boundaries.
- Normalize thrown values to Error.
