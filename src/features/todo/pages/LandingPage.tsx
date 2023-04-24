import useCurrentTime from "@/features/todo/hooks/useCurrentTime";
import TodoForm from "@/features/todo/components/TodoForm";
import ClickableTimer from '@/features/todo/components/ClickableTimer';
import dynamic from 'next/dynamic';
import TodoHeader from '@/features/todo/components/TodoHeader';
const ScrollTodoContainer = dynamic(() => import("@/features/todo/components/TodoList"), { ssr: false });

const LandingPage = () => {
  const cntTime = useCurrentTime();

  return (
    <main className="min-h-screen w-screen">
      <article className={'flex flex-col items-center gap-0.5 w-[395px] mx-auto my-0'}>
        <TodoHeader />
        <ClickableTimer time={cntTime} />
        <section className={'flex flex-col gap-2 rounded-sm border-gray2 border-[1px] w-full p-[10px]'}>
          <TodoForm time={cntTime} />
          <ScrollTodoContainer />
        </section>
      </article>
    </main>
  )
}

export default LandingPage;
