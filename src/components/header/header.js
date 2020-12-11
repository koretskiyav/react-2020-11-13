import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import userContext from '../../contexts/user-context';
import priceConverterContext from '../../contexts/price-converter-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { changeCurrency } = useContext(priceConverterContext);

  const onCurrencyChange = (e) => {
    // TODO
    // changeCurrency(e.target.value);
  };

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <form>
        <input type="radio" onChange={onCurrencyChange} value="usd" />;
        <input type="radio" onChange={onCurrencyChange} value="rub" />;
        <input type="radio" onChange={onCurrencyChange} value="eur" />;
      </form>
      <h2>{name}</h2>
    </header>
  );
};
export default Header;
