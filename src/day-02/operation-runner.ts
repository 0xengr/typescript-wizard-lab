/**
 * Day 2 — Exercise 2: Function types
 *
 * Concept: Function type aliases, higher-order functions.
 * Scenario: A calculator applies operations to numbers.
 *
 * Required:
 * - `Operation` type: (a: number, b: number) => number.
 * - `runOperation(operation, a, b)` invokes it.
 * - `createMultiplier(factor)` returns an Operation that scales its first input by factor.
 *
 * Acceptance criteria:
 * - `runOperation` returns the operation result.
 * - Multiplier scales the first operand.
 *
 * Edge cases:
 * - factor 0.
 * - negative factors.
 *
 * Corresponding test: tests/day-02/operation-runner.test.ts
 *
 * Hints:
 * 1. Define the function type alias first.
 * 2. Higher-order function returns the typed function.
 * 3. Use an arrow function.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/functions.html
 */

export type Operation = (a: number, b: number) => number;

export function runOperation(operation: Operation, a: number, b: number): number {
  throw new Error("Not implemented: runOperation");
}

export function createMultiplier(factor: number): Operation {
  throw new Error("Not implemented: createMultiplier");
}
