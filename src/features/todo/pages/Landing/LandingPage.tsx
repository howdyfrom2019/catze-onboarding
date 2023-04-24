import useCurrentTime from "@/features/todo/hooks/useCurrentTime";
import TodoAdder from "@/features/todo/components/TodoAdder/TodoAdder";
import ClickableTimer from '@/features/todo/components/ClickableTimer/ClickableTimer';
import dynamic from 'next/dynamic';
const ScrollTodoContainer = dynamic(() => import("@/features/todo/components/TodoList/TodoList"), { ssr: false });

const LandingPage = () => {
  const cntTime = useCurrentTime();

  return (
    <main className="min-h-screen w-screen">
      <article className={'flex flex-col items-center gap-0.5 w-[395px] mx-auto my-0'}>
        <span className={'font-bold-32 text-black my-5 self-start'}>Hi! 🤚 Catze!</span>
        <ClickableTimer time={cntTime} />
        <section className={'flex flex-col gap-2 rounded-sm border-gray2 border-[1px] w-full p-[10px]'}>
          <TodoAdder time={cntTime} />
          <ScrollTodoContainer />
        </section>
      </article>
    </main>
  )
}

export default LandingPage;
