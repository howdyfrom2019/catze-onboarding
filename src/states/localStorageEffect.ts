import { AtomEffect } from "recoil";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
    ({ setSelf, onSet }) => {
      if (typeof window === 'undefined') return;

      const prev = window.localStorage.getItem(key);
      if (prev !== null) {
        setSelf(JSON.parse(prev));
      }

      onSet((value, _, isReset) => {
        isReset
          ? window.localStorage.removeItem(key)
          : window.localStorage.setItem(key, JSON.stringify(value));
      });
    };

export default localStorageEffect;
