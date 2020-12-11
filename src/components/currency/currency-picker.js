import cn from 'classnames';
import React, { useMemo } from 'react';
import { withCurrency } from '../../contexts/currency-context';

import styles from './currency-picker.module.css';

const CurrencyPicker = ({ currencies, activeCurrency, setActiveCurrency }) => {
  const currencyList = useMemo(() => Object.keys(currencies), [currencies]);

  return currencyList.map((code) => (
    <span key={code}
          onClick={() => setActiveCurrency(code)}
          className={cn(styles.currency, { [styles.active]: code === activeCurrency })}>
      {code}
    </span>
  ));
};

export default withCurrency(CurrencyPicker);