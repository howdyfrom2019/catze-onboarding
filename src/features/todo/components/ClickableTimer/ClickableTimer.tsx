interface Props {
  time: string;
}

const ClickableTimer: React.FC<Props> = ({ time }) => {
  return <span className={'w-full bg-gray1 hover:bg-blue1 py-2 rounded-sm border-[1px] border-gray2 text-center font-bold-20 text-black'}>{time}</span>
}

export default ClickableTimer;
