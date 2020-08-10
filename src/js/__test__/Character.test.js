import Character from '../Character';
import Bowman from '../characters/Bowman';

  test('Prevent the creation of Character objects -> fail', () => {
    expect(() => {
      new Character(); // eslint-disable-line no-new
    }).toThrow();
  });

test('Create Bowman -> success', () => {
  const expected = {
    level: 1,
    health: 50,
    type: 'bowman',
    attack: 25,
    defence: 25,
    distance: 2,
    distanceAttack: 2,
  };
  const received = new Bowman(1);
  expect(received).toEqual(expected);
});


