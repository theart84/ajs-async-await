import GameSavingLoader from './GameSavedLoader';
import GameSaving from './GameSaving';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return new GameSaving(saving);
  } catch (err) {
    return Promise.reject(err);
  }
})();
