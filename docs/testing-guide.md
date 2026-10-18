# Testing Guide

- Source lives in `src/day-XX/`.
- Tests live in `tests/day-XX/` and import from `../../src/day-XX/...`.
- Run one day: `bun run test:day-0X`.
- Run all: `bun run test`.
- Type check: `bun run typecheck`.

Failing tests on unfinished exercises are expected. Syntax errors, broken imports, or wrong expectations are scaffold defects.

Test failures point to missing behavior; read assertion messages. TypeScript compiler errors are separate from runtime test failures.
