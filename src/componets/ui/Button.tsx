"use client";
import { forwardRef, ReactNode, MouseEvent } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "size" | "onClick"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 focus:ring-purple-500 shadow-lg hover:shadow-xl",
      secondary:
        "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500 shadow-sm hover:shadow-md",
      outline:
        "border-2 border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white",
      ghost: "text-white hover:bg-white/10 focus:ring-white/50",
      danger:
        "bg-gradient-to-r from-red-500 to-red-600 text-white hover:opacity-90 focus:ring-red-500 shadow-lg hover:shadow-xl",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      icon: "p-2",
    };

    const finalClassName = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </>
    );

    return (
      <motion.button
        ref={ref}
        className={finalClassName}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
