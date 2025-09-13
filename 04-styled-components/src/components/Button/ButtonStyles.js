import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  font-weight: 600;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease,
    transform 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* --- Variantes --- */
  ${({ variant }) =>
    variant === "solid" &&
    css`
      background-color: #007bff;
      color: #fff;
      box-shadow: 0 2px 6px #007bff;

      &:hover:not(:disabled),
      &:focus-visible:not(:disabled) {
        background-color: #0056b3;
        box-shadow: 0 4px 10px #0056b3;
        transform: translateY(-2px);
      }
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
      border: 2px solid #007bff;
      color: #007bff;

      &:hover:not(:disabled),
      &:focus-visible:not(:disabled) {
        background-color: #007bff;
        color: #fff;
        transform: translateY(-2px);
      }
    `}

  ${({ variant }) =>
    variant === "ghost" &&
    css`
      background-color: transparent;
      color: #007bff;

      &:hover:not(:disabled),
      &:focus-visible:not(:disabled) {
        background-color: rgba(0, 123, 255, 0.1);
        transform: translateY(-2px);
      }
    `}
`;