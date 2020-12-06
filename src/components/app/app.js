import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import Menu from '../menu';
import Review from '../reviews/review';
import RestaurantsPage from '../../pages/restaurants-page';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={() => 'Main page'} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id/menu" exact component={Menu} />
          <Route path="/restaurants/:id/reviews" exact component={Review} />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </div>
    );
  }
}
