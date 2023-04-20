interface CardProps {
  id: string;
  contents: string;
  createdAt?: string;
  isDone: boolean;
}

const Card = ({ id, contents, createdAt, isDone }: CardProps) => {
  return (
    <div className={'flex justify-between items-center rounded-md border-gray2 border-[1px] w-full'}>
      <div className={'flex flex-col gap-4 p-2'}>
        <span className={'font-bold-16 text-black'}>{contents}</span>
        <span className={'font-bold-12 text-textGray'}>{createdAt}</span>
      </div>
      <input type={'checkbox'} />
    </div>
  )
}

export default Card;
