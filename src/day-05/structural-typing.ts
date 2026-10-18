/**
 * Day 5 — Exercise 4: Structural typing
 *
 * Concept: Structural compatibility, interfaces.
 * Scenario: Functions accept any object with required shape.
 *
 * Required:
 * - `HasName` interface { name: string }.
 * - `greet(entity)` returns "Hello, <name>".
 * - `rename(entity, newName)` returns a new object with name updated (generic).
 *
 * Acceptance criteria:
 * - Works with any object containing name.
 *
 * Edge cases:
 * - Extra properties preserved in rename.
 *
 * Corresponding test: tests/day-05/structural-typing.test.ts
 *
 * Hints:
 * 1. Accept `HasName` (or generic with constraint).
 * 2. Use spread for rename.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

export interface HasName {
  name: string;
}

export function greet(entity: HasName): string {
  throw new Error("Not implemented: greet");
}

export function rename<T extends HasName>(entity: T, newName: string): T {
  throw new Error("Not implemented: rename");
}
