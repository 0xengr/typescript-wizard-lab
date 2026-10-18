/**
 * Day 5 — Exercise 2: Interfaces and dependency injection
 *
 * Concept: Interfaces, structural typing, DI.
 * Scenario: Checkout depends on a payment gateway.
 *
 * Required:
 * - `PaymentGateway` interface with `charge(amount: number): Promise<boolean>`.
 * - `CheckoutService` class taking gateway in constructor.
 * - `pay(amount)` delegates to gateway and returns result.
 *
 * Acceptance criteria:
 * - Gateway is not instantiated inside the service.
 *
 * Edge cases:
 * - amount 0.
 *
 * Corresponding test: tests/day-05/payment-processor.test.ts
 *
 * Hints:
 * 1. Define interface first.
 * 2. Store gateway as private readonly.
 * 3. Delegate call.
 *
 * Resources:
 * - https://www.typescriptlang.org/docs/handbook/2/classes.html
 */

export interface PaymentGateway {
  charge(amount: number): Promise<boolean>;
}

export class CheckoutService {
  constructor(private readonly gateway: PaymentGateway) {}

  async pay(amount: number): Promise<boolean> {
    throw new Error("Not implemented: pay");
  }
}
