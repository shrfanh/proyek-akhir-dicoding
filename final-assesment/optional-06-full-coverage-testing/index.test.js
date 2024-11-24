import sum from './index.js';
import { strict as assert } from 'node:assert';
import { test } from 'node:test';

// jika input bukan angka
test('should return 0 when a or b is not a number', () => {
  assert.equal(sum('a', 5), 0); // a bukan angka
  assert.equal(sum(5, 'b'), 0); // b bukan angka
  assert.equal(sum('a', 'b'), 0); // a dan b bukan angka
  assert.equal(sum(null, 5), 0); // null sebagai input
  assert.equal(sum(5, undefined), 0); // undefined sebagai input
});

// jika input merupakan angka negatif
test('should return 0 when a or b is negative', () => {
  assert.equal(sum(-5, 5), 0); // a negatif
  assert.equal(sum(5, -5), 0); // b negatif
  assert.equal(sum(-5, -5), 0); // a dan b negatif
});

// jika input merupakan angka positif
test('should return correct sum when a and b are positive numbers', () => {
  assert.equal(sum(5, 5), 10); // keduanya positif
  assert.equal(sum(10, 20), 30); // keduanya positif
});

// jika input merupakan angka nol
test('should return correct sum when a or b is zero', () => {
  assert.equal(sum(0, 5), 5); // a adalah nol
  assert.equal(sum(5, 0), 5); // b adalah nol
  assert.equal(sum(0, 0), 0); // keduanya nol
});
