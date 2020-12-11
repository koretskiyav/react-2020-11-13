import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import ErrorPage from '../../pages/error-page';
import { CurrencyProvider } from '../../contexts/currency-context';

const App = () => {
  const [currency, setCurrency] = useState('USD');
  return (
    <div>
      <CurrencyProvider value={{ currency, setCurrency }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/success" component={() => <h1>Thanks for order!</h1>} />
          <Redirect from="/" to="/restaurants" />
        </Switch>
      </CurrencyProvider>
    </div>
  );
};

export default App;
