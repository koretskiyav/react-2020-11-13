import React from 'react';
import { connect } from 'react-redux';

import { decrement, increment, deleteProduct } from '../../../redux/actions';

const OrderItem = ({ product, increment2, decrement2, deleteProduct }) => {
  return (
    <div>
      <span>{product.name}</span>
      <span>quantity: {product.quantity}</span>
      <span>total: {product.total}</span>
      <div>
        <button
          onClick={() => decrement2(product.id)}
          data-id="product-decrement"
        >
          -
        </button>
        <button
          onClick={() => increment2(product.id)}
          data-id="product-increment"
        >
          +
        </button>
        <button onClick={() => deleteProduct(product.id)}>X</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps, called by redux');
  return {
    increment2: (id) => {
      console.log('dispatch, increment');
      dispatch(increment(id));
    },
    decrement2: (id) => {
      console.log('dispatch, decrement');
      dispatch(decrement(id));
    },
    deleteProduct: (id) => {
      console.log('dispatch, deleteProduct');
      dispatch(deleteProduct(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(OrderItem);
