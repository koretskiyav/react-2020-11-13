import React, { createContext, useState, useContext } from 'react';

const initialValue = {
  currencies: {},
  activeCurrency: null,
  setActiveCurrency: () => {}
};

const context = createContext(initialValue);

export const CurrencyProvider = ({ currencies, defaultCurrency, children }) => {
  const [activeCurrency, setActiveCurrency] = useState(defaultCurrency);
  const providerValue = { currencies, activeCurrency, setActiveCurrency };

  return (
    <context.Provider value={providerValue}>
      {children}
    </context.Provider>
  );
};

const convert = (context) => (value) => {
  const { currencies, activeCurrency } = context;
  const { rate, sign } = currencies[activeCurrency];
  const convertedValue = Math.floor(value * rate * 10) / 10;

  return `${convertedValue} ${sign}`;
};

export const withCurrency = (WrappedComponent) => (props) => {
  const currencyContext = useContext(context);
  const convertCurrency = convert(currencyContext);
  const currencyProps = {...currencyContext, convertCurrency};

  return <WrappedComponent {...props} {...currencyProps} />
};

export default context;

