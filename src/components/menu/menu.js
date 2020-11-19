import React from 'react';
import Product from '../product';
import * as classes from './menu.module.css';

export default function Menu(props) {
  // console.log('[menu] props', props)
  return (
    <div className={classes.Menu}>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
