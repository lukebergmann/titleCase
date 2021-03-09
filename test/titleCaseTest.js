const assert = require('chai').assert;
const titleCase = require('../titleCase');

describe("Changes the first letter of every word in a string", () => {
  it("Returns a lowercase sentence to a sentence with uppercase first letters", () => {
    assert.strictEqual(titleCase("a partridge in a pear tree"), "A Partridge In A Pear Tree");
  });
  it("Returns a lowercase word to a word with uppercase first letters", () => {
    assert.strictEqual(titleCase("lemon"), "Lemon");
  });
  it("Returns a lowercase sentence with individual letters to a sentence with uppercase first letters", () => {
    assert.strictEqual(titleCase("what i know is what i c"), "What I Know Is What I C");
  });
  it("Returns a uppercase sentence to a sentence with uppercase first letters and the rest lowercase", () => {
    assert.strictEqual(titleCase("IF YOU LIKE IT THEN YOU SHOULDA PUT A RING ON IT"), "If You Like It Then You Shoulda Put A Ring On It");
  });
  it("Returns an empty string to an empty string", () => {
    assert.strictEqual(titleCase(""), "");
  });
  it("Returns a single uppercase letter to an uppercase letter ", () => {
    assert.strictEqual(titleCase("Z"), "This Is An Example");
  });
});


// Manual Testing //
console.log(titleCase("HElLO LuKE HOw ArE yOU"));