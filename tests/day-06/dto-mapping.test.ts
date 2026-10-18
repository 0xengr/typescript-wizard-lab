import { describe, expect, test } from "bun:test";
import { toDomain, toDto } from "../../src/day-06/dto-mapping";

describe("day-06 dto-mapping", () => {
  test("toDomain combines names", () => {
    expect(toDomain({ id: "1", first_name: "Ada", last_name: "Lovelace" })).toEqual({
      id: "1",
      fullName: "Ada Lovelace",
    });
  });
  test("toDomain keeps email", () => {
    expect(toDomain({ id: "1", first_name: "Ada", last_name: "Lovelace", email: "a@b.com" }).email).toBe("a@b.com");
  });
  test("toDto splits fullName", () => {
    expect(toDto({ id: "1", fullName: "Ada Lovelace" })).toEqual({
      id: "1",
      first_name: "Ada",
      last_name: "Lovelace",
    });
  });
});