import React from 'react';
import { connect }from 'react-redux';
import {decrement, discard, increment} from '../../../redux/actions';

import styles from './item.module.css';

const OrderItem = ({ product, amount, increment, decrement, discard }) => {
  const total = product.price * amount;

  return (
    <div className={styles.item}>
      <span className={styles.name}>{product.name}</span>
      <span className={styles.amount}>Amount: {amount}</span>
      <strong className={styles.total}>Total: {total}</strong>
      <button className={styles.button} onClick={increment}>+</button>
      <button className={styles.button} onClick={decrement}>-</button>
      <button className={styles.button} onClick={discard}>x</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, {product}) => ({
  increment: () => dispatch(increment(product.id)),
  decrement: () => dispatch(decrement(product.id)),
  discard: () => dispatch(discard(product.id))
});

export default connect(null, mapDispatchToProps)(OrderItem);
