import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import currencyContext, {
  USD,
  EUR,
  GBP,
} from '../../contexts/currency-context';
import cn from 'classnames';

const Header = () => {
  const { currency, setCurrency } = useContext(currencyContext);

  const buttons = [USD, EUR, GBP].map((curr) => (
    <button
      key={curr}
      className={cn(curr === currency && styles.active, 'block', 'small')}
      onClick={() => setCurrency(curr)}
    >
      {curr}
    </button>
  ));

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.currency}>{buttons}</div>
    </header>
  );
};
export default Header;
