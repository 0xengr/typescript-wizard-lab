/**
 * Day 4 — Exercise 3: keyof and indexed access types
 *
 * Concept: `keyof`, indexed access, safe property access.
 * Scenario: Reading and updating object properties generically.
 *
 * Required:
 * - `getProperty(obj, key)` returns obj[key].
 * - `setProperty(obj, key, value)` returns a new object with updated property.
 *
 * Acceptance criteria:
 * - Type of returned property matches.
 * - Input object not mutated.
 *
 * Edge cases:
 * - Updating same value.
 *
 * Corresponding test: tests/day-04/property-access.test.ts
 *
 * Hints:
 * 1. Constrain K with `K extends keyof T`.
 * 2. Use `T[K]` for value type.
 * 3. Spread to avoid mutation.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  throw new Error("Not implemented: getProperty");
}

export function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  throw new Error("Not implemented: setProperty");
}
