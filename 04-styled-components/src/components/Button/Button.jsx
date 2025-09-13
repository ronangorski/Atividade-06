import React from "react";
import { ButtonStyled } from "./ButtonStyles";

export default function Button({
  children,
  variant = "solid",
  disabled,
  onClick,
}) {
  return (
    <ButtonStyled
      type="button"
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
}