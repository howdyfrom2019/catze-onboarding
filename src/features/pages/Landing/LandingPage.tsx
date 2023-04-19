import Card from "@/features/components/Card/Card";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      project
      <Card contents={'it\'s test'} isDone={false} />
    </main>
  )
}

export default LandingPage;
