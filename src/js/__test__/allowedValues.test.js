import { allowedValues, allowedValuesAttack } from '../allowedValues';

test('Allowed cells for travel -> success', () => {
  const expected = allowedValues(2, 2, 8);
  const received = [3, 1, 10, 11, 9, 4, 0, 18, 20, 16];
  expect(received).toEqual(expected);
});

test('Allowed cells for attack -> success', () => {
  const expected = allowedValuesAttack(2, 2, 8);
  const received = [3, 1, 10, 11, 9, 4, 0, 18, 20, 16];
  expect(received).toEqual(expected);
});
