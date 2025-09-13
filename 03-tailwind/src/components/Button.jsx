import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "solid",
  disabled = false,
  onClick,
  className,
  type = "button",
  ...rest
}) {
  const baseClasses = `
    font-bold
    rounded-[8px]
    px-3 py-1
    text-base
    cursor-pointer
    transition-all duration-200 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    solid: `
      bg-brand text-white
      shadow-[0_2px_6px_#007bff]
      hover:bg-brandDark hover:shadow-[0_4px_10px_#0056b3] hover:-translate-y-[2px]
      focus-visible:bg-brandDark focus-visible:shadow-[0_4px_10px_#0056b3]
      focus-visible:-translate-y-[2px]
    `,
    outline: `
      bg-transparent border-2 border-brand text-brand
      hover:bg-brand hover:text-white hover:-translate-y-[2px]
      focus-visible:bg-brand focus-visible:text-white focus-visible:-translate-y-[2px]
    `,
    ghost: `
      bg-transparent text-brand
      hover:bg-brand/10 hover:-translate-y-[2px]
      focus-visible:bg-brand/10 focus-visible:-translate-y-[2px]
    `,
  };

  const classes = clsx(baseClasses, variantClasses[variant], className);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
}
