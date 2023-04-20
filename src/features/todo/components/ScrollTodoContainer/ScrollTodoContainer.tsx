import useTodoList from '@/states/hooks/useTodoList';
import Card from '@/features/todo/components/Card/Card';

interface Props {
  className?: string;
}

const ScrollTodoContainer: React.FC<Props> = ({ className }) => {
  const [todos] = useTodoList();
  return (
    <div className={'flex flex-col gap-2 flex max-h-[389px] overflow-y-scroll'}>
      {todos.map((todo) => (
        <Card id={todo.id} contents={todo.contents} isDone={todo.isDone} createdAt={todo.id} key={todo.id} />
      ))}
    </div>
  )
}

export default ScrollTodoContainer;
