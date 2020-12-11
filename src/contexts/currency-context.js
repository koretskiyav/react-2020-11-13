import { createContext } from 'react';

const currenciesData = {
  USD: { rate: 1, sign: '$' },
  RUB: { rate: 73.29, sign: '₽' },
  UAH: { rate: 27.93, sign: '₴' },
};

const currencyContext = createContext({ currency: 'USD' });
const CurrencyConsumer = currencyContext.Consumer;

export const CurrencyProvider = currencyContext.Provider;

export const convertaition = (price) => {
  return (
    <CurrencyConsumer>
      {({ currency }) =>
        `${(price * currenciesData[currency].rate).toFixed(2)} ${
          currenciesData[currency].sign
        }`
      }
    </CurrencyConsumer>
  );
};

export default currencyContext;
