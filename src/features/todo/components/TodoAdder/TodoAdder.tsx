import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

interface Props {
  onClickAddBtn?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

const TodoAdder: React.FC<Props> = ({ onClickAddBtn }) => {
  return (
    <section className={'flex flex-col gap-2.5 p-4 bg-gray1 w-full'}>
      <span className={'font-regular-14'}>What should I do today?</span>
      <Input onChange={() => {}} />
      <Button className={'self-end'} onClick={() => {}}>Add</Button>
    </section>
  )
}

export default TodoAdder;
