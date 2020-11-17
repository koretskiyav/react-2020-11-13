import React from 'react';
import counter from '../hocs/counter';

function Product(props) {
  const { count, decrement, increment } = props;

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default counter(Product);
