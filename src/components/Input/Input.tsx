import { ComponentPropsWithRef } from "react";

const Input: React.FC<ComponentPropsWithRef<"input">> = ({ className, placeholder, ref, ...props }) => {
  return (
    <input
      className={`rounded-s border-[1px] border-gray2 bg-white placeholder-textGray hover:border-blue3 focus:border-blue3 outline-0 p-2 ${className}`}
      placeholder={placeholder || 'Enter your task.'}
      {...props}
      ref={ref}
    />
  )
}

export default Input;
