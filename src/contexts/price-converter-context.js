import { createContext } from 'react';

const priceConverterContext = createContext({
  currency: 'usd',
  priceConverter: (price, currency) => {
    switch (currency) {
      case 'usd':
        return `${price} $`;
      case 'rub':
        return `${price * 73} rub`;
      case 'eur':
        return `${price * 0.9} eur`;
      default:
        return price;
    }
  },

  // TODO: не нашел как изменить значение currency
  // changeCurrency: (currency) => {
  //   this.currency = currency;
  // },
});

export const PriceConverterConsumer = priceConverterContext.Consumer;
export const PriceConverterProvider = priceConverterContext.Provider;

export default priceConverterContext;
