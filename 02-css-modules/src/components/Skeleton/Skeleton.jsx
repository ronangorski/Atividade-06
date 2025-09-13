import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton({ height }) {
  return (
    <div
      className={styles.skeleton}
      style={height ? { height } : undefined}
      aria-busy="true"
      aria-label="Carregando..."
    />
  );
}
