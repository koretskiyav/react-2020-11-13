import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';

import App from './components/app';

import store from './redux/store';
import history from './history';

import { CurrencyProvider } from './contexts/currency-context';
import { normalizedCurrencies } from './fixtures';

const currencies = normalizedCurrencies.reduce((acc, currency) => ({...acc, [currency.code]: currency }), {});

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <CurrencyProvider currencies={currencies} defaultCurrency="USD">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </CurrencyProvider>,
  document.getElementById('root')
);
