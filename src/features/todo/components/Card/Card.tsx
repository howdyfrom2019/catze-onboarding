interface CardProps {
  contents: string;
  date?: Date;
  isDone: boolean;
}

const Card = ({ contents, date, isDone }: CardProps) => {
  return (
    <section className={'flex justify-between items-center rounded-md border-gray2 border-2 w-full'}>
      <div className={'flex flex-col gap-4 p-2'}>
        <span className={'font-bold-16 text-black'}>{contents}</span>
        <span className={'font-bold-12 text-textGray'}>2023 04 19</span>
      </div>
      <input type={'checkbox'} />
    </section>
  )
}

export default Card;
