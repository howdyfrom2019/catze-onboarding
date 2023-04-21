import { useRecoilState, useRecoilValue } from "recoil";
import todolist, { TodoTypes } from "@/states/todolist";

type TodoAction =
  | { type: 'CREATE', todo: TodoTypes }
  | { type: 'DELETE', id: string }
  | { type: 'COMPLETE', id: string }

const useTodoList = (): [TodoTypes[], (action: TodoAction) => void] => {
  const [todoList, setTodoList] = useRecoilState(todolist);

  const dispatch = (action: TodoAction) => {
    switch(action.type) {
      case 'CREATE':
        setTodoList((prev) => [...prev, action.todo]);
        break;
      case 'DELETE':
        setTodoList((prev) => prev.filter(item => item.id !== action.id));
        break;
      case 'COMPLETE':
        setTodoList((prev) =>
          prev.map(item => item.id === action.id
            ? ({ ...item, isDone: !item.isDone })
            : item
          ));
        break;
      default:
        throw new Error('unhandled error');
    }
  }

  return [todoList, dispatch];
}

export default useTodoList;
