/**
 * Day 1 — Exercise 4: readonly and basic immutability
 *
 * Concept: Readonly tuples, immutability, derived values.
 * Scenario: A map editor stores points as coordinates.
 *
 * Required:
 * - `Point` type as a readonly tuple `[number, number]`.
 * - `distance(a, b)` returns the Euclidean distance.
 * - `move(point, dx, dy)` returns a new point without mutating the input.
 *
 * Acceptance criteria:
 * - Inputs are not mutated.
 * - Distance between identical points is 0.
 *
 * Edge cases:
 * - Negative coordinates.
 * - Zero movement.
 *
 * Corresponding test: tests/day-01/coordinates.test.ts
 *
 * Hints:
 * 1. Use `readonly [number, number]` for the tuple.
 * 2. Use `Math.hypot` or the square root of squared differences.
 * 3. Return a new tuple from `move`.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/objects.html
 */

export type Point = readonly [number, number];

export function distance(a: Point, b: Point): number {
  throw new Error("Not implemented: distance");
}

export function move(point: Point, dx: number, dy: number): Point {
  throw new Error("Not implemented: move");
}
