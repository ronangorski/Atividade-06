import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 2rem;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
  z-index: 100;
  background-color: ${({ theme }) => theme.bodyBg};
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  user-select: none;
`;

export const Logo = styled.div`
  position: absolute;
  left: 2rem;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const CenterEmoji = styled.div`
  font-size: 1.8rem;
  border: 2px solid #333; /* mantém exatamente como antes */
  border-radius: 50%;
  padding: 0.3rem;
  display: inline-block;
  background-color: #007bff; /* mantém exatamente como antes */
  color: #fff; /* mantém exatamente como antes */
`;

export const NavbarRight = styled.div`
  position: absolute;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1rem;
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

export const ThemeToggle = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  background: none;
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  color: inherit;

  &:hover,
  &:focus {
    background-color: #007bff; /* mantém igual ao original */
    color: #fff; /* mantém igual ao original */
    outline: none;
    transform: scale(1.1);
    box-shadow: 0 0 6px #007bff; /* mantém igual ao original */
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;