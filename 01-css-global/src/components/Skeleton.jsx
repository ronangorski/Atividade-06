import React from "react";

export default function Skeleton({ height }) {
  return (
    <div
      className="skeleton"
      style={height ? { height } : undefined}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
}