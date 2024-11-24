import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

// Menulis pengujian untuk fungsi sum
test('Pengujian untuk fungsi sum', (t) => {
  // menguji apakah sum(2, 3) mengembalikan 5
  assert.strictEqual(sum(2, 3), 5, 'sum(2, 3) harusnya 5');
  
  // menguji apakah sum(-1, 1) mengembalikan 0
  assert.strictEqual(sum(-1, 1), 0, 'sum(-1, 1) harusnya 0');
  
  // menguji apakah sum(0, 0) mengembalikan 0
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) harusnya 0');
  
  // menguji apakah sum(10, 5) mengembalikan 15
  assert.strictEqual(sum(10, 5), 15, 'sum(10, 5) harusnya 15');
});
