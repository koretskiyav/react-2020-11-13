import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  routeSelector,
  pushProductsSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';

import { pushOrder } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  pathname,
  pushProducts,
  pushOrder,
  loading,
}) {
  // const { name } = useContext(userContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
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
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      {pathname === '/checkout' ? (
        loading ? (
          <Button primary block>
            loading...
          </Button>
        ) : (
          <Button onClick={() => pushOrder(pushProducts)} primary block>
            PUSH
          </Button>
        )
      ) : (
        <Link to="/checkout">
          <Button primary block>
            checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  pathname: routeSelector,
  pushProducts: pushProductsSelector,
  loading: orderLoadingSelector,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   pushOrder: () => dispatch(pushOrder(ownProps.pushProducts)),
// });

export default connect(mapStateToProps, { pushOrder })(Basket);
