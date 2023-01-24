describe('Set', () => {
  test('case 1 ', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2 ', () => {
    expect(1 + 3).toBe(4);
  });

  describe('other group', () => {
    test('case 3', () => {
      expect(1 + 1).toBe(2);
    });
    test('case 2 ', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
