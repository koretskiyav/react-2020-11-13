import { createContext } from 'react';

export const USD = 'USD';
export const EUR = 'EUR';
export const GBP = 'GBP';

const exchangeMultiplier = {
  USD: 1,
  EUR: 0.8,
  GBP: 0.75,
};

const exchangeSign = {
  USD: '$',
  EUR: '€',
  GBP: '£',
};

const currencyContext = createContext({
  currency: USD,
});

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;

export const convert = (price, curr) => {
  return `${(price * exchangeMultiplier[curr]).toFixed(1)} ${
    exchangeSign[curr]
  }`;
};

export default currencyContext;
