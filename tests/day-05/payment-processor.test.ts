import { describe, expect, test } from "bun:test";
import { CheckoutService } from "../../src/day-05/payment-processor";

describe("day-05 payment-processor", () => {
  test("delegates to gateway", async () => {
    const gateway = { charge: async (amount: number) => amount > 0 };
    const checkout = new CheckoutService(gateway);
    expect(await checkout.pay(10)).toBe(true);
    expect(await checkout.pay(0)).toBe(false);
  });
});