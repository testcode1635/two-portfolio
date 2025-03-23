import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { clssName, children, variant, ...rest } = props;
  return (
    <button
      clssName={twMerge(
        "h-11 px-6 rounded-xl border border-orange-500 uppercase inline-flex items-center gap-2",
        variant === "primary" && "bg-orange-500 text-white",
        variant === "secondary" && "",
        variant === "text" && "h-auto px-0 border-transparent",
        clssName
      )}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};
export default Button;
