import React from 'react';
import { connect } from 'react-redux';
import OrderItem from './order-item';
import styles from './order.module.css';

const Order = ({ allDishes, order }) => {
  const orderEntries = Object.keys(order);

  const orderLines =
    orderEntries.length > 0 ? (
      orderEntries.map((id) => {
        const product = allDishes[id];
        return <OrderItem key={id} id={id} product={product} />;
      })
    ) : (
      <p>Please, choose something</p>
    );

  const total = orderEntries.reduce((sum, id) => {
    const amount = order[id];
    const price = allDishes[id].price;
    return sum + amount * price;
  }, 0);

  return (
    <div className={styles.order}>
      <h2>Your order:</h2>
      {orderLines}
      <h3>Total: {total} $</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
