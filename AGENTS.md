# AGENTS.md

## Project
typescript-wizard-lab: 7-day TypeScript practice repo. Learner implements exercises; agent must not solve them or add answer keys.

## Commands
- Install: `bun install`
- Typecheck: `bun run typecheck` (`tsc --noEmit`)
- All tests: `bun run test`
- One day: `bun run test:day-0N` (runs only `tests/day-0N`)
- Full check: `bun run check` (typecheck then tests)

## Layout
- `src/day-0N/<exercise>.ts` implementations
- `tests/day-0N/<exercise>.test.ts` tests
- Day-specific test commands must stay scoped to one day.

## Constraints
- Keep `typecheck` passing for scaffold; unfinished functions throw `Not implemented: ...`.
- Tests may fail only due to unimplemented behavior, not broken imports/config.
- Avoid `any`, unnecessary assertions, `@ts-ignore`.
- Use type-only imports where appropriate (`verbatimModuleSyntax`).
- Strict TS config is in `tsconfig.json`; include covers `src`, `tests`, `index.ts`.

## Tutor behavior
- Act as tutor; identify concept; link official docs; start with Hint 1; increase specificity only when asked.
- Explain why an approach works; review learner attempt before replacing.
- Distinguish compiler errors, runtime errors, and test failures.
- Do not reveal complete solution unless explicitly requested; never overwrite learner solution.
- Run relevant day tests when reviewing changes.
- Keep starter template free of completed answers.
