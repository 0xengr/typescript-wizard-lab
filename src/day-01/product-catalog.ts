/**
 * Day 1 — Exercise 3: Type aliases and object shapes
 *
 * Concept: Type aliases, arrays of objects, simple queries.
 * Scenario: A store keeps a catalog of products.
 *
 * Required:
 * - `Product` type alias with `id`, `name`, `price`, and `tags`.
 * - `calculateTotal(products)` sums prices.
 * - `findProductById(products, id)` returns the matching product or `undefined`.
 * - `listTagged(products, tag)` returns products containing the tag.
 *
 * Acceptance criteria:
 * - Unknown ids return `undefined`.
 * - Tag matching is case-sensitive.
 *
 * Edge cases:
 * - Empty catalog.
 * - Duplicate tags.
 *
 * Corresponding test: tests/day-01/product-catalog.test.ts
 *
 * Hints:
 * 1. Define the object shape with a type alias.
 * 2. Use `Array.prototype.find` and `filter`.
 * 3. Sum with `reduce`, starting from 0.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

export type Product = {
  id: string;
  name: string;
  price: number;
  tags: string[];
};

export function calculateTotal(products: Product[]): number {
  throw new Error("Not implemented: calculateTotal");
}

export function findProductById(products: Product[], id: string): Product | undefined {
  throw new Error("Not implemented: findProductById");
}

export function listTagged(products: Product[], tag: string): Product[] {
  throw new Error("Not implemented: listTagged");
}
