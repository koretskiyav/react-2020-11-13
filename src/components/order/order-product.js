import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, clear } from '../../redux/actions';
import styles from './order.module.css';

const OrderProduct = ({ increment, decrement, clear, product }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price} $</td>
      <td>
        <button onClick={decrement}>-</button>
        <span className={styles.amount}>{product.amount}</span>
        <button onClick={increment}>+</button>
      </td>
      <td>{product.totalPrice} $</td>
      <td>
        <button onClick={clear}>x</button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  clear: () => dispatch(clear(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);
