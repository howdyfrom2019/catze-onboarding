interface CardProps {
  contents: string;
  date?: Date;
  isDone: boolean;
}

const Card = ({ contents, date = new Date(), isDone }: CardProps) => {
  return (
    <section className={'flex justify-around items-center'}>
      <div className={'flex flex-col gap-4 p-2'}>
        <span className={'font-bold-16 text-black'}>{contents}</span>
        <span className={'font-bold-12 text-textGray'}>{date.toString()}</span>
      </div>
    </section>
  )
}

export default Card;
