import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import userContext from '../../contexts/user-context';
import currencyContext from '../../contexts/currency-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header}>
      <Logo />

      <ul>
        <li onClick={() => setCurrency('USD')}>USD</li>
        <li onClick={() => setCurrency('UAH')}>UAH</li>
        <li onClick={() => setCurrency('RUB')}>RUB</li>
      </ul>

      <h2 onClick={() => setName('Ivan')}>{name}</h2>
    </header>
  );
};
export default Header;
