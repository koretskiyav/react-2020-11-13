import React from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import OrderItem from '../order-item/orderItem';

const Order = ({ products, order }) => {
  const orderEntries = Object.keys(order);
  const orderProducts =
    orderEntries.length > 0
      ? orderEntries.map((id) => {
          return products[id];
        })
      : [];
  const sumPrice = orderEntries.reduce((sum, id) => {
    return sum + order[id] * products[id].price;
  }, 0);

  return (
    <div className={styles.order}>
      {orderProducts.map((item) => (
        <OrderItem product={item} key={item.id} />
      ))}
      <div className={styles.totalPrice}>{sumPrice} $</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
