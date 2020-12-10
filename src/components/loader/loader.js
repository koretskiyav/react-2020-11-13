import React from 'react';
import styles from './loader.module.css';

function Loader() {
  return (
    <div className={styles.loader} data-id="loader">
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
    </div>
  );
}

export default Loader;
