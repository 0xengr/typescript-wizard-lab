import { describe, expect, test } from "bun:test";
import { distance, move } from "../../src/day-01/coordinates";

describe("day-01 coordinates", () => {
  test("distance between identical points is 0", () => {
    expect(distance([0, 0], [0, 0])).toBe(0);
  });

  test("distance computes euclidean distance", () => {
    expect(distance([0, 0], [3, 4])).toBe(5);
  });

  test("move returns a new point", () => {
    const point = [1, 2] as const;
    const moved = move(point, 3, 4);
    expect(moved).toEqual([4, 6]);
    expect(point).toEqual([1, 2]);
  });

  test("move with zero delta keeps point", () => {
    expect(move([5, -2], 0, 0)).toEqual([5, -2]);
  });
});