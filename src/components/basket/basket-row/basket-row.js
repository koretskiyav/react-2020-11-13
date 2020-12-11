import React from 'react';
import cx from 'classnames';
import styles from '../basket-item/basket-item.module.css';
import { CurrencyConsumer } from '../../../contexts/currency-context';

function BasketRow({ label, content, bold = false }) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <p className={cx({ [styles.bold]: bold })}>{label}</p>
      </div>
      <div className={styles.info}>
        <p className={cx({ [styles.bold]: bold })}>
          <CurrencyConsumer>
            {(value) => `${content} ${value.currency}`}
          </CurrencyConsumer>
        </p>
      </div>
    </div>
  );
}

export default BasketRow;
