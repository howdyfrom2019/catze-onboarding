import { atom } from "recoil";
import localStorageEffect from "@/states/localStorageEffect";

export interface TodoTypes {
  id: string;
  isDone: boolean;
  contents: string;
  createdAt: Date;
}

const todoList = atom<TodoTypes[]>({
  key: '@todoList',
  default: [],
  effects: [localStorageEffect('@todoList')]
});

export default todoList;

