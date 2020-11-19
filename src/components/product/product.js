import React from 'react';
import counter from '../../hocs/counter';
import * as classes from './product.module.css';

import Plus from '../../icons/plus';
import minus from '../../icons/minus.svg';

function Product(props) {
  const { count, decrement, increment } = props;

  return (
    <div className={classes.Product}>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>
        <img src={minus} alt="minus" />
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default counter(Product);
