import React from 'react';
import styles from './order.module.css';
import { connect } from 'react-redux';
import Item from './item';

const Order = ({ order, data }) => {
  let itemsArr = Object.entries(order);

  // FIXME, REFACTORED
  // AND add USE EFFECT or  USEMEMO
  let allProducts = [];
  if (data.data) {
    data.data.forEach((rest) => {
      rest.menu.forEach((product) => {
        itemsArr.forEach((item) => {
          if (product.id === item[0]) {
            product.amount = item[1];
            allProducts.push(product);
          }
        });
      });
    });
  }

  const totalSum = allProducts.reduce((a, b) => a + b.price * b.amount, 0);
  console.log(totalSum);

  return (
    <div className={styles.order}>
      <h2>Basket</h2>

      <div>
        {allProducts.map((product) => (
          <Item key={product.id} product={product} amount={product.amount} />
        ))}
      </div>
      <h3 className={styles.total}>
        {' '}
        TOTAL: &nbsp;
        {totalSum}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  data: state.data,
});

export default connect(mapStateToProps)(Order);
