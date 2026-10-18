# typescript-wizard-lab

A seven-day, hands-on TypeScript practice repository. You implement the exercises; tests and hints are provided.

## Start Here

1. Install dependencies:
   ```bash
   bun install
   ```
2. Open the roadmap:
   - `docs/roadmap.md`
3. Start Day 1:
   - Read `src/day-01/README.md`
   - Open `src/day-01/type-inference.ts`
   - Implement the requested functions/types
   - Run `bun run test:day-01`

## Daily Workflow

```bash
# 1. Read the day README and exercise headers.
# 2. Implement files under src/day-0N/.
# 3. Run only that day's tests.
bun run test:day-01

# 4. Fix based on compiler/test feedback.
# 5. Type check the whole repo.
bun run typecheck

# 6. Move to the next day.
```

## Commands

```bash
bun run test          # all tests
bun run test:day-01   # Day 1 only
bun run test:day-02   # Day 2 only
bun run test:day-03   # Day 3 only
bun run test:day-04   # Day 4 only
bun run test:day-05   # Day 5 only
bun run test:day-06   # Day 6 only
bun run test:day-07   # Day 7 only
bun run test:watch    # watch mode
bun run typecheck     # TypeScript only
bun run check         # typecheck + all tests
```

## Repository Map

- `src/day-0N/` — exercises, starter implementations, hints, resources
- `tests/day-0N/` — tests for that day
- `docs/` — roadmap, testing guide, Git workflow
- `notes/` — daily log and mistakes log
- `AGENTS.md` — tutor rules for AI assistants

## How to Solve an Exercise

1. Read the exercise header comment.
2. Identify the concept and required behavior.
3. Implement in the same file.
4. Run the day's tests.
5. Use hints only after attempting.
6. Record mistakes in `notes/mistakes.md`.

## Expected Failures

- Unfinished exercises fail with `Not implemented: ...`.
- That is expected and means the exercise is not done yet.
- Syntax errors, broken imports, or wrong expectations are scaffold defects and should be fixed.

## Hints and Resources

Each exercise file contains:
- Concept
- Scenario
- Required behavior
- Acceptance criteria
- Edge cases
- 3 progressive hints
- Official documentation links

## Type Checking

Run `bun run typecheck` after changes. The scaffold must stay type-correct even while exercises are unfinished.

## Testing Guide

See `docs/testing-guide.md`.

## Git Workflow

- `main`: starter template only (no completed answers)
- `solution`: your completed answers
- Do not merge `solution` into `main`

For contributors:
1. Fork the repository.
2. Clone your fork.
3. Create a solution branch: `git checkout -b solution`
4. Implement and test your answers.
5. Push your solution branch.

See `docs/git-workflow.md`.

## Notes

Use `notes/daily-log.md` and `notes/mistakes.md` to track progress.

## License

MIT. See `LICENSE`.
