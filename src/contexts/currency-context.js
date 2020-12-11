import { createContext } from 'react';

const currencyContext = createContext({});

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;

export default currencyContext;
