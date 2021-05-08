import React from "react";

const H1 = ({ children, fz, pad, color }) => {
  const styles = {};

  styles.fontSize = `${fz}px`;

  styles.paddingTop = `${pad}px`;

  styles.color = `${color}`;

  return <h1 style={styles}>{children}</h1>;
};

export default H1;
