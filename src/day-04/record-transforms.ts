/**
 * Day 4 — Exercise 5: Record, Readonly, ReturnType
 *
 * Concept: Utility types and type transformations.
 * Scenario: Grouping and transforming data.
 *
 * Required:
 * - `groupBy(items, keyFn)` returns `Record<string, T[]>`.
 * - `freezeConfig(config)` returns `Readonly<T>`.
 * - `inferReturn(fn)` type alias extracts return type using ReturnType.
 *
 * Acceptance criteria:
 * - Grouped arrays include all items.
 * - Frozen config cannot be mutated (compile-time).
 *
 * Edge cases:
 * - Empty items.
 *
 * Corresponding test: tests/day-04/record-transforms.test.ts
 *
 * Hints:
 * 1. Use reduce to build record.
 * 2. Use `Readonly<T>`.
 * 3. Use conditional type with infer.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

export function groupBy<T>(items: T[], keyFn: (item: T) => string): Record<string, T[]> {
  throw new Error("Not implemented: groupBy");
}

export function freezeConfig<T>(config: T): Readonly<T> {
  throw new Error("Not implemented: freezeConfig");
}

export type InferReturn<F extends (...args: any[]) => any> = ReturnType<F>;
