import { ComponentPropsWithRef } from "react";
import clsx from "clsx";

const Input: React.FC<ComponentPropsWithRef<"input">> = ({ type, className, placeholder, ref, ...props }) => {
  return (
    <input
      type={type}
      className={
        clsx(
          'rounded-s border-[1px] placeholder-textGray hover:border-blue3 focus:border-blue3 outline-0',
          type !== 'submit' && 'bg-white p-2 border-gray2',
          className && className)
      }
      placeholder={placeholder || 'Enter your task.'}
      {...props}
      ref={ref}
    />
  )
}

export default Input;
