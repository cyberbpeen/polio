import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "rounded-xl text-base font-semibold transition-all duration-200 ease-in",
  {
    variants: {
      variant: {
        primary: ["bg-gray-900", "text-white", "hover:shadow-xl"],
        secondary: [
          "text-gray-900",
          "ring-1",
          "ring-inset",
          "ring-gray-900",
          "hover:bg-black",
          "hover:text-white",
        ],
      },
      size: {
        small: ["h-10", "py-2", "px-6"],
        medium: ["h-12", "py-3", "px-6"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ variant, size, className })} {...props} />;

export default Button;
