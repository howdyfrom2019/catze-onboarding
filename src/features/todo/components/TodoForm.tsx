import Input from "@/components/Input/Input";
import useTodoList from '@/states/hooks/useTodoList';
import { useCallback, useState } from 'react';
import { TodoTypes } from '@/states/todolist';

interface Props {
  time: string;
}

const TodoForm: React.FC<Props> = ({ time }) => {
  const [_, dispatch] = useTodoList();
  const [todo, setTodo] = useState('');

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodo(e.target.value);
  }

  const clearTodo = () => {
    setTodo('');
  }

  const handleSubmitTodoItem = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const tempTodo: TodoTypes = { id: time, isDone: false, contents: todo, createdAt: new Date(time) };
    dispatch({ type: 'CREATE', todo: tempTodo });
    clearTodo();
  }, [todo]);

  return (
    <form className={'flex flex-col gap-2.5 p-4 bg-gray1 w-full'} onSubmit={handleSubmitTodoItem}>
      <span className={'font-regular-14 font-sans'}>What should I do today?</span>
      <Input name={'@todo'} onChange={handleChangeTodo} value={todo} />
      <Input type={'submit'} className={'font-bold-12 bg-blue2 hover:bg-blue3 disabled:bg-gray2 text-white rounded-sm w-20 p-1 self-end cursor-pointer'} value={'Add'} />
    </form>
  )
}

export default TodoForm;
