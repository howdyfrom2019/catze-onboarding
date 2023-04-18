import { atom } from "recoil";
import localStorageEffect from "@/states/localStorageEffect";

export interface TodoTypes {
  id: number;
  isDone: boolean;
  contents: string;
  createdAt: Date;
}

export const todoList = atom<TodoTypes>({
  key: '@todoList',
  default: [],
  effects: [localStorageEffect('@todoList')]
});
