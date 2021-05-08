import React from "react";

export default function Paragraph({ children, color, pad, fz, lh }) {
  debugger;

  const styles = {};

  styles.color = `${color}`;
  styles.padding = `${pad}px`;
  styles.fontSize = `${fz}px`;
  styles.lineHeight = `${lh}px`;

  return <p style={styles}>{children}</p>;
}
