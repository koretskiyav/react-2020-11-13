import React from 'react';
import { connect } from 'react-redux';

import styles from './basket.module.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';

function Basket({ title = 'Basket', total, orderProducts }) {
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
        <BasketItem
          product={product}
          amount={amount}
          key={product.id}
          subtotal={subtotal}
        />
      ))}
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      <Button primary block>
        checkout
      </Button>
    </div>
  );
}

export default connect((state) => {
  const allProducts = state.restaurants.flatMap(
    (restaurant) => restaurant.menu
  );

  const orderProducts = Object.keys(state.order)
    .filter((productId) => state.order[productId] > 0)
    .map((productId) => allProducts.find((product) => product.id === productId))
    .map((product) => ({
      product,
      amount: state.order[product.id],
      subtotal: state.order[product.id] * product.price,
    }));

  const total = orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0);

  return {
    total,
    orderProducts,
  };
})(Basket);
