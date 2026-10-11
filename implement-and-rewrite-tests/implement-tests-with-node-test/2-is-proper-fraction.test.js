import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});
test("Zero numerator is a proper fraction", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("Numerator smaller than denominator is proper", () => {
  assert.equal(isProperFraction(3, 4), true);
  assert.equal(isProperFraction(99, 100), true);
});

test("Numerator equal to denominator is not proper", () => {
  assert.equal(isProperFraction(1, 1), false);
  assert.equal(isProperFraction(5, 5), false);
});

test("Numerator larger than denominator is not proper", () => {
  assert.equal(isProperFraction(5, 2), false);
  assert.equal(isProperFraction(7, 3), false);
});

test("Negative numerator or denominator uses the absolute values", () => {
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(-1, -2), true);
  assert.equal(isProperFraction(-3, 2), false);
  assert.equal(isProperFraction(3, -2), false);
});

test("Zero denominator is not a proper fraction", () => {
  assert.equal(isProperFraction(1, 0), false);
});