import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, sans-serif;
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    padding-top: 60px;
  }
`;

// tokens
export const lightTheme = {
  mode: "light",
  bodyBg: "#fff",
  text: "#222",
  primary: "#007bff",
  primaryHover: "#0056b3",
  onPrimary: "#fff",
  shadow: "rgba(0, 0, 0, 0.1)",
  rating: "#f5a623",
};

export const darkTheme = {
  mode: "dark",
  bodyBg: "#121212",
  text: "#eee",
  primary: "#66aaff",
  primaryHover: "#3388ff",
  onPrimary: "#fff",
  shadow: "rgba(255, 255, 255, 0.1)",
  rating: "#f5a623",
};

// grid e responsividade
export const ProductList = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 16px 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
