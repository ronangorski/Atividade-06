import React from "react";

export default function Button({
  children,
  onClick,
  variant = "solid",
  disabled,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}
