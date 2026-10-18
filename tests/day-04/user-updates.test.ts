import { describe, expect, test } from "bun:test";
import { applyUpdates, publicUser, withoutAge } from "../../src/day-04/user-updates";

describe("day-04 user-updates", () => {
  const user = { id: "1", name: "Ada", email: "a@b.com", age: 30 };

  test("applyUpdates merges", () => {
    const updated = applyUpdates(user, { name: "Bob", age: 31 });
    expect(updated.name).toBe("Bob");
    expect(updated.age).toBe(31);
    expect(updated.email).toBe("a@b.com");
    expect(updated).not.toBe(user);
  });
  test("applyUpdates empty", () => {
    expect(applyUpdates(user, {})).toEqual(user);
  });
  test("publicUser picks fields", () => {
    expect(publicUser(user)).toEqual({ id: "1", name: "Ada" });
  });
  test("withoutAge omits age", () => {
    expect(withoutAge(user)).toEqual({ id: "1", name: "Ada", email: "a@b.com" });
  });
});