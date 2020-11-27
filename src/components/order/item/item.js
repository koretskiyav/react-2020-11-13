import React from 'react';
import { connect } from 'react-redux';
import styles from './item.module.css';
import { decrement, increment, deleting } from '../../../redux/actions';

const Item = ({ product, amount, increment, decrement, deleting }) => {
  return (
    <div className={styles.item}>
      <div className={styles.name}> {product.name} </div>
      <div className={styles.text}>price: {product.price} </div>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
      <div className={styles.count}>{amount}</div>
      <button className={styles.button} onClick={increment}>
        +
      </button>
      <button className={styles.button} onClick={deleting}>
        X
      </button>
      <div className={styles.count}>{amount * product.price} </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  deleting: () => dispatch(deleting(ownProps.product.id)),
});

export default connect(null, mapDispatchToProps)(Item);
