import getTestGameData from './getTestGameData';

export default class MockGameStateService {
  constructor(storage) {
    this.storage = storage;
  }

  save(state) {
    this.storage.setItem('state', JSON.stringify(state));
  }

  static load() {
    try {
      const data = getTestGameData();
      return JSON.parse(data);
    } catch (e) {
      throw new Error('Invalid state');
    }
  }
}
