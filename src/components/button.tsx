import React from "react";

// ==================================
// Button Component
// ==================================
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
  buttonBackground?: "yellow" | "black" | "green";
  outlineBlack?: "yellow" | "black" | "green";
  outline?: boolean;
}
export function Button({
  text,
  size,
  className,
  buttonBackground,
  outlineBlack,
  outline,
  ...props
}: ButtonProps): React.JSX.Element {
  // ==================================
  // Map size prop to Tailwind classes
  // ==================================
  const sizeClasses = {
    small: "text-xs px-3 py-2",
    medium: "text-sm px-6 py-3",
    large: "text-lg px-8 py-6",
  };
  const backgroundClasses = {
    yellow: "bg-[#eafab4] text-black",
    black: "bg-black !text-[#eafab4]",
    green: "bg-green-500 text-white",
  };
  const outlineClasses = {
    yellow: "border-1 border-[#eafab4] !text-[#eafab4] bg-transparent",
    black: "border-1 border-black text-black bg-transparent",
    green: "border-1 border-green-500 text-green-500 bg-transparent",
  };
 
  // ==================================
  // Button Size Classes
  // ==================================
  return (
    <button
      {...props}
      className={`bg-[#eafab4] font-[500]    transition-all cursor-pointer text-black rounded-full ${
        sizeClasses[size || "medium"]
      }  ${backgroundClasses[buttonBackground || "yellow"]} ${outline ? outlineClasses[outlineBlack || "yellow"] : ""} ${className || ""} `}
    >
      {text}
    </button>
  );
}
