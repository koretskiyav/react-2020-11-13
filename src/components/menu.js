import React from 'react';
import Product from './product';

const style = {
  border: '1px solid red',
};

export default function Menu(props) {
  return (
    <div style={style}>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
