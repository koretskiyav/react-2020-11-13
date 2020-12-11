import React, { useContext } from 'react';

import Logo from './logo';
import CurrencyPicker from '../currency';
import styles from './header.module.css';
import userContext from '../../contexts/user-context';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <div className={styles.currencies}>
        <CurrencyPicker />
      </div>
      <Logo />
      <h2>{name}</h2>
    </header>
  );
};
export default Header;
