import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import RestaurantsPage from '../../pages/restaurants-page';
import BasketPage from '../../pages/basket-page';
import { UserProvider } from '../../contexts/user-context';

const App = () => {
  const [name, setName] = useState('Igor');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={BasketPage} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Redirect exact from="/" to="/restaurants" />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
