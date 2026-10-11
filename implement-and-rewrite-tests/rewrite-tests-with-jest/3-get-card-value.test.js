import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

// Case 1 (continued): every suit of ace
test(`Should return 11 for an ace of any suit`, () => {
  expect(getCardValue("A♥")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Number cards (2-10)
test(`Should return the number for cards 2 to 9`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("5♦")).toEqual(5);
  expect(getCardValue("9♣")).toEqual(9);
});

test(`Should return 10 for a 10 card`, () => {
  expect(getCardValue("10♥")).toEqual(10);
});

// Face cards (J, Q, K)
test(`Should return 10 for face cards`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

// Invalid cards
test(`Should throw an error when the rank or suit is missing`, () => {
  expect(() => getCardValue("")).toThrow();
  expect(() => getCardValue("A")).toThrow();
  expect(() => getCardValue("♠")).toThrow();
  expect(() => getCardValue("10")).toThrow();
});

test(`Should throw an error for an invalid rank`, () => {
  expect(() => getCardValue("0♠")).toThrow();
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("Z♠")).toThrow();
});

test(`Should throw an error for an invalid suit`, () => {
  expect(() => getCardValue("5x")).toThrow();
  expect(() => getCardValue("A$")).toThrow();
});

test(`Should throw an error with a helpful message`, () => {
  expect(() => getCardValue("invalid")).toThrow(
    /Expected a number followed by a suit/
  );
});