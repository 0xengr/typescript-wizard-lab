import { describe, expect, test } from "bun:test";
import { freezeConfig, groupBy } from "../../src/day-04/record-transforms";

describe("day-04 record-transforms", () => {
  test("groupBy groups items", () => {
    const items = [
      { type: "a", v: 1 },
      { type: "b", v: 2 },
      { type: "a", v: 3 },
    ];
    const grouped = groupBy(items, (i) => i.type);
    expect(grouped.a!.length).toBe(2);
    expect(grouped.b!.length).toBe(1);
  });
  test("groupBy empty", () => {
    expect(groupBy([], (x: { k: string }) => x.k)).toEqual({});
  });
  test("freezeConfig returns readonly", () => {
    const cfg = freezeConfig({ x: 1 });
    expect(cfg.x).toBe(1);
  });
});