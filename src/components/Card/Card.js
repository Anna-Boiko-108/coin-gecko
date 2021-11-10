import React from "react";

import styles from "./Card.module.css";

const NO_DATA = "-";

export const AppCard = ({ data, onClick }) => {
  const { name, image, current_price, high_24h, low_24h, symbol } = data;

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.header}>
        <div>
          <h4>{name} </h4>
          <p className={styles.symbol}>({symbol})</p>
        </div>
        <img alt={name} src={image} className={styles.image} />
      </div>
      <div className={styles.description}>
        <div className={styles.description_row}>
          <p>Current Price: </p>
          <p>{current_price || NO_DATA}</p>
        </div>
        <div className={styles.description_row}>
          <p>High 24 hour Price: </p>
          <p>{high_24h || NO_DATA}</p>
        </div>
        <div className={styles.description_row}>
          <p>Low 24 hour Price: </p>
          <p>{low_24h || NO_DATA}</p>
        </div>
      </div>
    </div>
  );
};
