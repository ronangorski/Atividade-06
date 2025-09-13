import styled from "styled-components";

export const Card = styled.article`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.shadow};
  border-radius: 8px;
  box-shadow: 0 1px 3px ${({ theme }) => theme.shadow};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  cursor: pointer;
  min-height: 450px;

  &:hover,
  &:focus-within {
    box-shadow: 0 4px 10px #007bff; /* mantém igual ao original */
    transform: translateY(-4px);
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #007bff; /* mantém igual ao original */
    outline-offset: 2px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  background-color: transparent;
  border-radius: 8px;
  flex-shrink: 0;
  height: 250px;
`;

export const Tag = styled.div`
  background-color: #007bff; /* mantém igual ao original */
  color: #fff; /* mantém igual ao original */
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  align-self: flex-start;
  user-select: none;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2em;
  height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: #007bff; /* mantém igual ao original */
`;

export const Rating = styled.div`
  color: #f5a623; /* mantém igual ao original */
  font-size: 1.1rem;
  user-select: none;
`;