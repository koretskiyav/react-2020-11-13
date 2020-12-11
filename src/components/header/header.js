import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import userContext from '../../contexts/user-context';
import currencyContext from '../../contexts/currency-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currency, setCurrency, dictionary } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <select
        value={currency}
        onChange={(event) => {
          setCurrency(event.target.value);
        }}
      >
        {Object.keys(dictionary).map((name, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Logo />
      <h2>{name}</h2>
    </header>
  );
};
export default Header;
