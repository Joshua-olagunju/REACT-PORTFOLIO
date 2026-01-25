import React from "react";

// ==================================
// Button Component
// ==================================
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: "small" | "medium" | "large";
  className?: string;
  buttonBackground?: "blue" | "black" | "green" | "blueSecondary";
  outlineBlack?: "blue" | "black" | "green" | "blueSecondary";
  outline?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}
export function Button({
  text,
  size,
  className,
  buttonBackground,
  outlineBlack,
  outline,
  icon,
  href,
  target,
  rel,
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
    blue: "!bg-[#275b8f] !text-[#ffffff]",
    blueSecondary: "!bg-[#275b8f] !text-[#275b8f]",
    black: "!bg-black !text-[#ffffff]",
    green: "!bg-[#83b541] !text-white",
  };
  const outlineClasses = {
    blue: "!border-1 !border-[#ffffff] !text-[#275b8f] !bg-transparent",
    blueSecondary:
      "!border-1 !border-[#275b8f] !text-[#275b8f] !bg-transparent",
    black: "!border-1 !border-black !text-[black] !bg-transparent",
    green: "!border-1 !border-[#83b541] !text-[#83b541] !bg-transparent",
  };

  // ==================================
  // Button Size Classes
  // ==================================
  const classNames = `bg-[#eafab4] font-[500]  transition-all cursor-pointer text-black rounded-full ${
    sizeClasses[size || "medium"]
  }  ${backgroundClasses[buttonBackground || "blue"]} ${
    outline ? outlineClasses[outlineBlack || "blue"] : ""
  } ${className || ""} `;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${classNames} inline-flex items-center justify-center gap-2`}>
        {text}
        {icon && <span className="text-sm">{icon}</span>}
      </a>
    );
  }

  return (
    <button {...props} className={classNames}>
      <div className="flex items-center justify-center gap-2">
        {text}
        {icon && <span className="text-sm">{icon}</span>}
      </div>
    </button>
  );
}
