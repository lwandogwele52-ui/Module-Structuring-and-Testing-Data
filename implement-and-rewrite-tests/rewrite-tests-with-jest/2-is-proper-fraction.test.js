import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
// Special case: numerator is zero
test(`should return true when numerator is zero`, () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// Numerator smaller than denominator
test(`should return true when numerator is smaller than denominator`, () => {
  expect(isProperFraction(3, 4)).toEqual(true);
  expect(isProperFraction(99, 100)).toEqual(true);
});

// Numerator equal to denominator
test(`should return false when numerator equals denominator`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(5, 5)).toEqual(false);
});

// Numerator larger than denominator
test(`should return false when numerator is larger than denominator`, () => {
  expect(isProperFraction(5, 2)).toEqual(false);
  expect(isProperFraction(7, 3)).toEqual(false);
});

// Negative numbers
test(`should compare absolute values when either number is negative`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(-1, -2)).toEqual(true);
  expect(isProperFraction(-3, 2)).toEqual(false);
  expect(isProperFraction(3, -2)).toEqual(false);
});