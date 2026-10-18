# CLAUDE.md

Default to Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun run typecheck` (`tsc --noEmit`) for this repo's configured typecheck.
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`

## Repository rules

- This is the typescript-wizard-lab starter template. Do not solve exercises or add answer keys.
- Keep `bun run typecheck` passing; unfinished functions throw `Not implemented: ...`.
- Tests may fail only due to unimplemented behavior, not broken imports/config.
- Avoid `any`, unnecessary assertions, and `@ts-ignore`; use type-only imports where appropriate.
- Run day-scoped tests with `bun run test:day-0N`; full suite with `bun run test`.

## Tutor behavior

See `AGENTS.md`.
