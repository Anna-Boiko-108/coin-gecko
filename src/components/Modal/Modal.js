import React from "react";
import Modal from "react-bootstrap/Modal";
import parse from "html-react-parser";

import styles from "./Modal.module.css";

const NO_DATA = "-";

export const AppModal = ({ data, shouldShow, onHide }) => {
  const {
    name,
    symbol,
    hashing_algorithm,
    market_data: { market_cap },
    links: { homepage },
    genesis_date,
    description,
  } = data;

  const homepageUrl = Array.isArray(homepage) && homepage[0];

  return (
    <Modal show={shouldShow} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="coins-modal">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.description_row}>
          <p>Symbol: </p>
          <p className={styles.symbol}>{symbol || NO_DATA}</p>
        </div>
        <div className={styles.description_row}>
          <p>Hashing algorithm: </p>
          <p>{hashing_algorithm || NO_DATA}</p>
        </div>
        <div className={styles.description_row}>
          <p>Market cap in Euro: </p>
          <p>{market_cap?.eur || NO_DATA}</p>
        </div>
        <div className={styles.description_row}>
          <p>Homepage: </p>
          {homepageUrl ? <a href={homepageUrl}>{homepageUrl}</a> : NO_DATA}
        </div>
        <div className={styles.description_row}>
          <p>Genesis Date: </p>
          <p>{genesis_date || NO_DATA}</p>
        </div>
        <div className={styles.description_row}>
          <p>{parse(description?.en)}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
