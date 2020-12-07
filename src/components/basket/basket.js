import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import styles from './basket.module.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  productsWithRestIdSelector,
} from '../../redux/selectors';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  productsWithRestIds,
}) {
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>{title}</h4>
      {orderProducts.map(({ product, amount, subtotal }) => (
        <Link
          key={product.id}
          to={`/restaurants/` + productsWithRestIds[product.id]}
        >
          <BasketItem
            product={product}
            amount={amount}
            key={product.id}
            subtotal={subtotal}
          />
        </Link>
      ))}
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      <Link to="/checkout">
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
  productsWithRestIds: productsWithRestIdSelector,
});

export default connect(mapStateToProps)(Basket);
