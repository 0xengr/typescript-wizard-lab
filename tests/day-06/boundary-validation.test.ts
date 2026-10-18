import { describe, expect, test } from "bun:test";
import { parseUserDto } from "../../src/day-06/boundary-validation";

describe("day-06 boundary-validation", () => {
  test("parses valid payload", () => {
    expect(
      parseUserDto({ id: "1", first_name: "Ada", last_name: "Lovelace", email: "a@b.com" }),
    ).toEqual({ id: "1", first_name: "Ada", last_name: "Lovelace", email: "a@b.com" });
  });
  test("rejects invalid", () => {
    expect(parseUserDto(null)).toBeNull();
    expect(parseUserDto({ id: "1" })).toBeNull();
    expect(parseUserDto({ id: "1", first_name: "Ada", last_name: "Lovelace", email: 5 })).toBeNull();
  });
});