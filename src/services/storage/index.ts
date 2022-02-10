import { Storage as AsyncStorage, SecureStorage } from 'src/common/types';

type StorageUnion = AsyncStorage | SecureStorage;

class StorageService<T extends StorageUnion> {
  #storage: T;

  constructor({ storage }: { storage: T }) {
    this.#storage = storage;
  }

  public getItem(key: string): Promise<string | null> {
    return this.#storage.getItem(key);
  }

  public setItem(key: string, value: string): Promise<void> {
    return this.#storage.setItem(key, value);
  }

  public removeItem(key: string): Promise<void> {
    return this.#storage.removeItem(key);
  }

  public clear(): Promise<void> {
    return this.#storage.clear();
  }
}

export { StorageService };
