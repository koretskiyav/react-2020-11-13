import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../contexts/user-context';
import ErrorPage from '../../pages/error-page';
const App = () => {
  const [name, setName] = useState('Igor');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" component={ErrorPage} />
          <Route
            path="/success"
            component={() => <h1>Thank you for order!</h1>}
          />
          <Redirect exact from="/" to={`/restaurants`} />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
