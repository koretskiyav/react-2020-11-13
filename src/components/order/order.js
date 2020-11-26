import React from 'react';
import { connect } from 'react-redux';

import OrderItem from './orderItem';

import { restaurants } from '../../fixtures';

const Order = ({ order }) => {
  const productIdList = Object.keys(order);

  const arrProduct = [];
  for (const rest of restaurants) {
    for (const product of rest.menu) {
      const result = productIdList.find((item) => item === product.id);
      if (result === product.id && order[product.id] > 0) {
        product.total = order[product.id] * product.price;
        product.quantity = order[product.id];
        arrProduct.push(product);
      }
    }
  }

  let totalPrice = 0;
  for (const item of arrProduct) {
    totalPrice += item.total;
  }

  return (
    <div>
      {arrProduct.map((product) => (
        <OrderItem key={product.id} product={product} />
      ))}
      <div>{totalPrice ? 'Total price: ' + totalPrice : ''}</div>
    </div>
  );
};

const mapStateToProps = (store, ownProps) => ({
  order: store.order,
});

export default connect(mapStateToProps)(Order);
