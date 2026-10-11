import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
test("Classifies acute angles", () => {
  assert.equal(getAngleType(1), "Acute angle");
  assert.equal(getAngleType(45), "Acute angle");
  assert.equal(getAngleType(89), "Acute angle");
});

test("Classifies obtuse angles", () => {
  assert.equal(getAngleType(91), "Obtuse angle");
  assert.equal(getAngleType(135), "Obtuse angle");
  assert.equal(getAngleType(179), "Obtuse angle");
});

test("Classifies straight angles", () => {
  assert.equal(getAngleType(180), "Straight angle");
});

test("Classifies reflex angles", () => {
  assert.equal(getAngleType(181), "Reflex angle");
  assert.equal(getAngleType(270), "Reflex angle");
  assert.equal(getAngleType(359), "Reflex angle");
});

test("Classifies invalid angles", () => {
  assert.equal(getAngleType(0), "Invalid angle");
  assert.equal(getAngleType(-45), "Invalid angle");
  assert.equal(getAngleType(360), "Invalid angle");
  assert.equal(getAngleType(500), "Invalid angle");
});