import React, { useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import OrderSuccessPage from '../../pages/order-success-page';
import ErrorPage from '../../pages/error-page';
import { UserProvider } from '../../contexts/user-context';
import currencyContext, {
  CurrencyProvider,
} from '../../contexts/currency-context';

const App = () => {
  const { currency: initialCurrency, ...restCurrencyContextData } = useContext(
    currencyContext
  );
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState(initialCurrency);

  return (
    <div>
      <CurrencyProvider
        value={{ ...restCurrencyContextData, currency, setCurrency }}
      >
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/order-success" component={OrderSuccessPage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/" component={() => '404 - not found'} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
