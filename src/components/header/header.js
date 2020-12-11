import React from 'react';

import Logo from './logo';
import CurrencySelect from './currency-select';
import styles from './header.module.css';

const Header = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Logo />
    </header>
    <CurrencySelect className={styles.currency} />
  </div>
);
export default Header;
