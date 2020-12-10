import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider, USD } from '../../contexts/currency-context';
import ErrorPage from '../../pages/error-page';
import OrderSuccessPage from '../../pages/order-success-page';

const App = () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState(USD);

  return (
    <div>
      <CurrencyProvider value={{ currency, setCurrency }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/order-success" component={OrderSuccessPage} />
            <Redirect from="/" to="/restaurants" exact />
            <Route path="/" component={() => '404 - not found'} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};

export default App;
