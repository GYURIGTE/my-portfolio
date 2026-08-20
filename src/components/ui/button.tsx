import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-gray-900 text-white px-7 py-4 rounded-full hover:bg-gray-700 transition",
    secondary: "border border-gray-900 text-gray-900 px-9 py-4 rounded-full gap-2 hover:bg-gray-900 hover:text-white transition",
    tertiary: "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",
  };

  return (
    <button className={cn("cursor-pointer inline-flex whitespace-nowrap items-center justify-center font-medium transition-colors focus:outline-none px-4 py-1.5 rounded-lg text-sm", 
      variantStyles[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  );
}