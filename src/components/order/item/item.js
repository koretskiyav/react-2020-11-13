import React from 'react';
import { connect } from 'react-redux';
import styles from './item.module.css';
import { decrement, increment } from '../../../redux/actions';

const Item = ({ product, amount, increment, decrement }) => {
  return (
    <div className={styles.counter}>
      <div className={styles.count}>{amount}</div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrement}>
          -
        </button>
        <button className={styles.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product)),
  decrement: () => dispatch(decrement(ownProps.product)),
});

export default connect(null, mapDispatchToProps)(Item);
