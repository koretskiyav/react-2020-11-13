import { createContext } from 'react';

const dictionary = {
  $: 1,
  '₽': 73.09,
  '€': 0.82,
};

const convert = (priceInDollars, toCurrency) =>
  `${Math.round(priceInDollars * dictionary[toCurrency])}${toCurrency}`;

const currencyContext = createContext({
  currency: '$',
  dictionary,
  convert,
});

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;

export default currencyContext;
