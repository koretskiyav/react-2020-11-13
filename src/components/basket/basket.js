import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  postOrderLoadingSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { checkoutOrder } from '../../redux/actions';
import Loader from '../loader';
import currencyContext, { convert } from '../../contexts/currency-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  checkoutOrder,
  loading,
}) {
  // const { name } = useContext(userContext);
  const { currency } = useContext(currencyContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      {loading && <Loader />}
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
              disabled={loading}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={convert(total, currency)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={convert(total, currency)} bold />
      <Button primary block onClick={checkoutOrder} disabled={loading}>
        checkout
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  loading: postOrderLoadingSelector,
});

const mapDispatchToProps = (dispatch) => ({
  checkoutOrder: () => dispatch(checkoutOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
