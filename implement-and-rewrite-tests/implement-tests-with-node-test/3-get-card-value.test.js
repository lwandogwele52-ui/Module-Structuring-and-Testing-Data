import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(() => getCardValue("invalid"), /Expected a number followed by a suit, but got "invalid"/, "Expected clear error");
});

// TODO: What other invalid card cases can you think of?
test("Aces are worth 11", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♥"), 11);
  assert.equal(getCardValue("A♦"), 11);
  assert.equal(getCardValue("A♣"), 11);
});

test("Number cards are worth their number", () => {
  assert.equal(getCardValue("2♠"), 2);
  assert.equal(getCardValue("5♦"), 5);
  assert.equal(getCardValue("9♣"), 9);
});

test("A 10 card has a two-digit rank and is worth 10", () => {
  assert.equal(getCardValue("10♥"), 10);
});

test("Face cards are worth 10", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♥"), 10);
  assert.equal(getCardValue("K♦"), 10);
});

test("Missing rank or suit throws an error", () => {
  assert.throws(() => getCardValue(""));
  assert.throws(() => getCardValue("A"));
  assert.throws(() => getCardValue("♠"));
  assert.throws(() => getCardValue("10"));
});

test("Invalid rank throws an error", () => {
  assert.throws(() => getCardValue("0♠"));
  assert.throws(() => getCardValue("1♠"));
  assert.throws(() => getCardValue("11♠"));
  assert.throws(() => getCardValue("Z♠"));
});

test("Invalid suit throws an error", () => {
  assert.throws(() => getCardValue("5x"));
  assert.throws(() => getCardValue("A$"));
});