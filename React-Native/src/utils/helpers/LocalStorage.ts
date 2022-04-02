import AsyncStorage from '@react-native-async-storage/async-storage';

type Keys = 'token' | 'firstTime';

interface ILocalStorage {
  get(key: Keys): Promise<string | undefined>;
  save(key: Keys, value: string): Promise<void>;
  remove(key: Keys): Promise<void>;
}

class LocalStorage implements ILocalStorage {
  remove(key: Keys): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  async get(key: Keys): Promise<string | undefined> {
    const value = await AsyncStorage.getItem(key);
    if (!value) {
      return undefined;
    }

    return value;
  }

  async save(key: Keys, value: string): Promise<void> {
    return await AsyncStorage.setItem(key, value);
  }
}

const localStorage = new LocalStorage();

export {localStorage};
