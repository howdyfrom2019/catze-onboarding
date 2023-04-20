import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import useTodoList from '@/states/hooks/useTodoList';
import { useCallback, useState } from 'react';
import { TodoTypes } from '@/states/todolist';

interface Props {
  time: string;
}

const TodoAdder: React.FC<Props> = ({ time }) => {
  const [_, dispatch] = useTodoList();
  const [todo, setTodo] = useState('');

  const onChangeTodoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo(e.target.value);
  }

  const onHandleTodoDispatch = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const tempTodo: TodoTypes = { id: time, isDone: false, contents: todo, createdAt: new Date(time) };
    dispatch({ type: 'CREATE', todo: tempTodo });
  }, [todo]);

  return (
    <div className={'flex flex-col gap-2.5 p-4 bg-gray1 w-full'}>
      <span className={'font-regular-14'}>What should I do today?</span>
      <Input onChange={onChangeTodoHandler} />
      <Button className={'self-end'} onClick={onHandleTodoDispatch}>Add</Button>
    </div>
  )
}

export default TodoAdder;
