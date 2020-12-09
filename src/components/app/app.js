import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import OrderConfirmationPage from '../../pages/order-confirmation-page';

const App = () => {
  const [name, setName] = useState('Igor');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Route path="/order-confirmation" component={OrderConfirmationPage} />
          <Redirect from="/" to="/restaurants" exact />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
