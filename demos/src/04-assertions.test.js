// se ke puede conocer como matchers
test('test obj', () => {
  const data = { name: 'daniel' };
  data.lastName = 'mata';
  expect(data).toEqual({ name: 'daniel', lastName: 'mata' });
});

test('value null', () => {
  const data = null;
  expect(data).toBeNull();
});
