import React, { useCallback, useEffect, useState } from "react";

import { Card, Modal } from "../../components";
import { getCoinsMarkets, getCoinsById } from "../../API/endpoints";

import styles from "./Home.module.css";

export const HomePage = () => {
  const [markets, setMarkets] = useState([]);
  const [coinsDetails, setCoinsDetails] = useState(null);

  useEffect(() => {
    const params = { per_page: 10 };
    getCoinsMarkets({ params })
      .then((data) => {
        setMarkets(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const cardClickHandler = useCallback(
    (id) => () => {
      getCoinsById({ id })
        .then((data) => {
          setCoinsDetails(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    []
  );

  const hideModalHandler = useCallback(() => {
    setCoinsDetails(null);
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h3>Cryptocurrency Prices</h3>
      </header>
      <div className={styles.list}>
        {markets.map((market) => (
          <Card
            key={market.id}
            data={market}
            onClick={cardClickHandler(market.id)}
          />
        ))}
      </div>
      {coinsDetails && (
        <Modal
          data={coinsDetails}
          shouldShow={Boolean(coinsDetails)}
          onHide={hideModalHandler}
        />
      )}
    </div>
  );
};
