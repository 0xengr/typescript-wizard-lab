# Git Workflow

## For contributors

1. Fork the repository.
2. Clone your fork.
3. Create a solution branch:
   ```bash
   git checkout -b solution
   ```
4. Implement exercises under `src/`.
5. Run day tests and typecheck:
   ```bash
   bun run test:day-0N
   bun run typecheck
   ```
6. Commit and push your solution branch.
7. Open a pull request only if contributing template improvements (not answers).

## Branch rules
- `main`: starter template only; must not contain completed answers.
- `solution`: personal completed answers; do not merge into `main`.
- Do not force-push or rewrite shared history.

## Template usage
- Clone `main` to start the challenge.
- Keep solutions on your own branch/fork.
