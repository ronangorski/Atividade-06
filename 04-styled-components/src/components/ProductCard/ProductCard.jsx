import React from "react";
import Button from "../Button/Button";
import Skeleton from "../Skeleton/Skeleton";
import {
  Card,
  ProductImage,
  Tag,
  Title,
  Price,
  Rating,
} from "./ProductCardStyles";

export default function ProductCard({ product, addToCart, loadingButton }) {
  const { title, price, rating, tag, image } = product;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Card
      tabIndex={0}
      aria-label={`${title}, preço ${price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}, avaliação ${rating} estrelas`}
    >
      <ProductImage
        src={image}
        alt={title}
        loading="lazy"
        width={300}
        height={300}
      />

      <Tag aria-label={`Etiqueta: ${tag}`}>{tag}</Tag>

      <Title>{title}</Title>

      <Price>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Price>

      <Rating aria-label={`Avaliação: ${rating} de 5 estrelas`}>{stars}</Rating>

      <Button
        variant="solid"
        type="button"
        onClick={addToCart}
        disabled={loadingButton}
        aria-label={`Adicionar ${title} ao carrinho`}
      >
        {loadingButton ? <Skeleton height="20px" /> : "Adicionar"}
      </Button>
    </Card>
  );
}