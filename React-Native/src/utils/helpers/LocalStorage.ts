import AsyncStorage from '@react-native-async-storage/async-storage';

type Keys = 'token' | 'firstTime';

interface ILocalStorage {
  get(key: Keys): Promise<string | undefined>;
  save(key: Keys, value: string): Promise<void>;
}

class LocalStorage implements ILocalStorage {
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
