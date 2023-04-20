import { AtomEffect } from "recoil";

const store = typeof localStorage === 'undefined' ? null : localStorage;

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
    ({ setSelf, onSet }) => {
      if (store) {
        const prev = store.getItem(key);
        if (prev !== null) {
          setSelf(JSON.parse(prev));
        }

        onSet((value, _, isReset) => {
          isReset
            ? store.removeItem(key)
            : store.setItem(key, JSON.stringify(value));
        });
      }
    };

export default localStorageEffect;
