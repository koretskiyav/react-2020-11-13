import React from 'react';
import { connect } from 'react-redux';
import styles from './orderItem.module.css';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import { decrement, increment, clear } from '../../redux/actions';

const OrderItem = ({ product, amount, increment, decrement, clear }) => {
  return (
    <div className={styles.orderItem}>
      <div>{product.name}</div>
      <div>{amount * product.price} $</div>
      <div className={styles.counter}>
        <div className={styles.count}>{amount}</div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={decrement}>
            <img src={MinusIcon} alt="minus" />
          </button>
          <button className={styles.button} onClick={increment}>
            <img src={PlusIcon} alt="plus" />
          </button>
          <button className={styles.button} onClick={clear}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  clear: () => dispatch(clear(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
