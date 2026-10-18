/**
 * Day 2 — Exercise 4: any, unknown, and never
 *
 * Concept: Safe handling of unknown values.
 * Scenario: Parsing data from an untrusted source.
 *
 * Required:
 * - `parseNumber(value: unknown): number | null`
 * - `parseString(value: unknown): string | null`
 * - `ensureNever(value: never): never` (exhaustiveness helper)
 *
 * Acceptance criteria:
 * - Numbers pass through; numeric strings are parsed.
 * - Non-numeric values return null.
 * - Strings pass through when string.
 *
 * Edge cases:
 * - null, undefined, objects, arrays.
 * - Empty string.
 *
 * Corresponding test: tests/day-02/unknown-parser.test.ts
 *
 * Hints:
 * 1. Use `typeof` checks.
 * 2. For strings, use Number() and isNaN.
 * 3. `never` helper throws or returns never.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */

export function parseNumber(value: unknown): number | null {
  throw new Error("Not implemented: parseNumber");
}

export function parseString(value: unknown): string | null {
  throw new Error("Not implemented: parseString");
}

export function ensureNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}
