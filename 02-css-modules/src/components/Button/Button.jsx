import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "solid",
  disabled,
  onClick,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
