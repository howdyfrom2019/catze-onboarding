import { ComponentPropsWithRef } from "react";
import clsx from "clsx";

const Button: React.FC<ComponentPropsWithRef<"button">> = ({ className, children, ...props}) => {
  return (
    <button className={clsx('font-bold-12 bg-blue2 hover:bg-blue3 disabled:bg-gray2 text-white rounded-sm w-20 p-1', className && className)} {...props}>
      {children}
    </button>
  )
}

export default Button;
