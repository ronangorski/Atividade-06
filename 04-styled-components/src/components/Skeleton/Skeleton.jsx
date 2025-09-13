import React from "react";
import { SkeletonBox } from "./SkeletonStyles";

export default function Skeleton({ height }) {
  return (
    <SkeletonBox height={height} aria-busy="true" aria-label="Carregando..." />
  );
}