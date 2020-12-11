import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { buyOrder } from '../../redux/actions';
import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  orderProductsSelector,
  totalSelector,
  buyProductsSelector,
  checkoutLoadingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  buyOrder,
  dataToBuy,
  loading,
  match,
}) {
  // const { name } = useContext(userContext);
  if (loading) {
    return <Loader />;
  }
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const executeOrder = () => {
    if (match.path === '/checkout') {
      buyOrder(dataToBuy);
    }
  };

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
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      <Link to="/checkout" onClick={executeOrder}>
        <Button primary block>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  dataToBuy: buyProductsSelector,
  loading: checkoutLoadingSelector,
});

export default connect(mapStateToProps, { buyOrder })(withRouter(Basket));
