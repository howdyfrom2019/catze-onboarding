import { ComponentPropsWithRef } from "react";

const Button: React.FC<ComponentPropsWithRef<"button">> = ({ className, children, ...props}) => {
  return (
    <button className={`font-bold-12 bg-blue2 hover:bg-blue3 disabled:bg-gray2 text-white rounded-sm w-20 p-1 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button;
