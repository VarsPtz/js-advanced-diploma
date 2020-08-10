import MockGameStateService from './MockGameStateService';
import getTestGameData from './getTestGameData';

jest.mock('./getTestGameData');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Test Load -> success', () => {
  const expected = `{"point":10,"maxPoint":10,"level":1,"currentThem":"prairie","userPositions":[]}`; // eslint-disable-line quotes
  getTestGameData.mockReturnValue(expected);
  const received = MockGameStateService.load();
  expect(JSON.stringify(received)).toBe(expected);
});


test('Test Load -> fail', () => {
  const expected = '';
  getTestGameData.mockReturnValue(expected);

  expect(() => {
    MockGameStateService.load();
  }).toThrow();
});