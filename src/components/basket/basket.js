import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import { checkout } from '../../redux/actions';
import {
  checkoutOrderProductsSelector,
  orderProductsSelector,
  currentRouteSelector,
  orderSavingSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  checkoutProducts,
  route,
  checkout,
  saving,
}) {
  const onClickHandler = useCallback(() => {
    if (route === '/checkout') {
      checkout(checkoutProducts);
    }
  }, [checkoutProducts, route, checkout]);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if (saving) {
    return <Loader />;
  }

  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={total} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={total} bold />
      <Link to="/checkout">
        <Button primary block onClick={onClickHandler}>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  saving: orderSavingSelector,
  route: currentRouteSelector,
  orderProducts: orderProductsSelector,
  checkoutProducts: checkoutOrderProductsSelector,
});

export default connect(mapStateToProps, { checkout })(Basket);
