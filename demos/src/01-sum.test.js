const { sum, divide, multiply } = require('./01-sum');

describe('Test math', () => {
  describe('Sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
  describe('Multiply', () => {
    test('adds 1 * 2 to equal 3', () => {
      expect(multiply(1, 2)).toBe(2);
    });
  });
  describe('Divide', () => {
    test('adds 1 / 2 to equal 3', () => {
      expect(divide(1, 2)).toBe(0.5);
    });
  });
});
