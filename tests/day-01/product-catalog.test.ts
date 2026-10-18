import { describe, expect, test } from "bun:test";
import { calculateTotal, findProductById, listTagged } from "../../src/day-01/product-catalog";

describe("day-01 product-catalog", () => {
  const products = [
    { id: "a", name: "Apple", price: 1.5, tags: ["fruit", "red"] },
    { id: "b", name: "Banana", price: 0.8, tags: ["fruit", "yellow"] },
    { id: "c", name: "Carrot", price: 0.4, tags: ["vegetable"] },
  ];

  test("calculateTotal sums prices", () => {
    expect(calculateTotal(products)).toBeCloseTo(2.7);
  });

  test("calculateTotal handles empty catalog", () => {
    expect(calculateTotal([])).toBe(0);
  });

  test("findProductById returns product or undefined", () => {
    expect(findProductById(products, "b")?.name).toBe("Banana");
    expect(findProductById(products, "zzz")).toBeUndefined();
  });

  test("listTagged filters by tag", () => {
    const result = listTagged(products, "fruit");
    expect(result.map((p) => p.id)).toEqual(["a", "b"]);
  });

  test("listTagged is case-sensitive", () => {
    expect(listTagged(products, "Fruit")).toEqual([]);
  });
});