import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import styles from './basket-page.module.css';

import Basket from '../components/basket';
import { orderErrorSelector } from '../redux/selectors';

const BasketPage = ({ match, orderError }) => {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path}>
        <Basket canCheckout />
      </Route>
      <Route path={`${path}/error`}>
        <h2 className={styles.message}>{orderError}</h2>
      </Route>
      <Route path={`${path}/success`}>
        <h2 className={styles.message}>Thanks for your order!</h2>
      </Route>
    </Switch>
  )
};

export default connect(() => createStructuredSelector({
  orderError: orderErrorSelector
}))(BasketPage);