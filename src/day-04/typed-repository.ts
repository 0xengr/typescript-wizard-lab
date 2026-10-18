/**
 * Day 4 — Exercise 2: Generic constraints and keyof
 *
 * Concept: Generic constraints, `keyof`, indexed access.
 * Scenario: An in-memory repository for entities with ids.
 *
 * Required:
 * - `Entity` constraint: { id: string }.
 * - `Repository<T>` interface with getAll, getById, add.
 * - `InMemoryRepository<T>` class implementing it.
 *
 * Acceptance criteria:
 * - Stores and retrieves items.
 * - getById returns undefined for missing.
 *
 * Edge cases:
 * - Duplicate ids (overwrite? reject?) — overwrite on add.
 *
 * Corresponding test: tests/day-04/typed-repository.test.ts
 *
 * Hints:
 * 1. Constrain T with `extends { id: string }`.
 * 2. Store items in an array or Map.
 * 3. Implement interface methods.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

export interface Entity {
  id: string;
}

export interface Repository<T extends Entity> {
  getAll(): T[];
  getById(id: string): T | undefined;
  add(item: T): void;
  remove(id: string): boolean;
}

export class InMemoryRepository<T extends Entity> implements Repository<T> {
  private items: T[] = [];

  getAll(): T[] {
    throw new Error("Not implemented: getAll");
  }

  getById(id: string): T | undefined {
    throw new Error("Not implemented: getById");
  }

  add(item: T): void {
    throw new Error("Not implemented: add");
  }

  remove(id: string): boolean {
    throw new Error("Not implemented: remove");
  }
}
