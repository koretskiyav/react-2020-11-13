import React from 'react';
import cx from 'classnames';
import styles from '../basket-item/basket-item.module.css';

function BasketRow({ label, content, bold = false }) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <p className={cx({ [styles.bold]: bold })}>{label}</p>
      </div>
      <div className={styles.info}>
        <p className={cx({ [styles.bold]: bold })}>{content}</p>
      </div>
    </div>
  );
}

export default BasketRow;
