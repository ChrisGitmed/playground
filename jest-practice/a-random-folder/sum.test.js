const { test, expect } = require('@jest/globals')
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

/**
 * In the future...
 *
 * Unit testing:
 *
 * |- /main
 * |  |- index.js
 * |  |- index.test.js
 *
 *
 * Integration testing:
 *
 * |- /main
 * |  |- index.js
 * |- /supporting
 * |  |- fetch.js
 * |- /tests
 * |  |- /int
 * |  |  |- api.test.js
 */
