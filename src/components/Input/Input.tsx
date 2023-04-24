import { ComponentPropsWithRef } from "react";
import clsx from "clsx";

const Input: React.FC<ComponentPropsWithRef<"input">> = ({ className, placeholder, ref, ...props }) => {
  return (
    <input
      className={clsx('rounded-s border-[1px] border-gray2 bg-white placeholder-textGray hover:border-blue3 focus:border-blue3 outline-0 p-2', className && className)}
      placeholder={placeholder || 'Enter your task.'}
      {...props}
      ref={ref}
    />
  )
}

export default Input;
