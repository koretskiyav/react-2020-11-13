import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, clear } from '../../redux/actions';
import styles from './order.module.css';

const OrderItem = ({ product, amount, increment, decrement, clear }) => {
  const { name, price } = product;
  const overallPrice = price * amount;

  return (
    <div className={styles.orderLine}>
      <div className={styles.item}>
        <span>
          {name} : {amount}
        </span>
        <div>
          <button className={styles.button} onClick={decrement}>
            -
          </button>
          <button className={styles.button} onClick={increment}>
            +
          </button>
          <button className={styles.button} onClick={clear}>
            x
          </button>
        </div>
      </div>
      <div>price: {overallPrice} $</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.id)),
  decrement: () => dispatch(decrement(ownProps.id)),
  clear: () => dispatch(clear(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
