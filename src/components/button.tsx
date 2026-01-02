import React from "react";

// ==================================
// Button Component
// ==================================
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
  buttonBackground?: "blue" | "black" | "green";
  outlineBlack?: "blue" | "black" | "green";
  outline?: boolean;
  icon?: React.ReactNode;
}
export function Button({
  text,
  size,
  className,
  buttonBackground,
  outlineBlack,
  outline,
  icon,
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
    blue: "!bg-[#275b8f] !text-[#eafab4]",
    black: "bg-black !text-[#eafab4]",
    green: "bg-green-500 text-white",
  };
  const outlineClasses = {
    blue: "border-1 !border-[#eafab4] !text-[#275b8f] bg-transparent",
    black: "border-1 border-black text-black bg-transparent",
    green: "border-1 border-green-500 text-green-500 bg-transparent",
  };

  // ==================================
  // Button Size Classes
  // ==================================
  return (
    <button
      {...props}
      className={`bg-[#eafab4] font-[500]  transition-all cursor-pointer text-black rounded-full ${
        sizeClasses[size || "medium"]
      }  ${backgroundClasses[buttonBackground || "blue"]} ${
        outline ? outlineClasses[outlineBlack || "blue"] : ""
      } ${className || ""} `}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && <span className="text-sm">{icon}</span>}
        {text}
      </div>
    </button>
  );
}
