import Card from "@/components/Card";

const LandingPage = () => {
  return (
    <main className="min-h-screen w-screen">
      <article className={'flex flex-col items-center gap-0.5 w-[395px] mx-auto my-0'}>
        <span className={'font-bold-32 text-black pt-8'}>Hi! 🤚 Catze!</span>
        <span className={'font-bold-20 text-black'}>2022.11.25</span>
        <Card contents={'it\'s test'} isDone={false} />
      </article>
    </main>
  )
}

export default LandingPage;
