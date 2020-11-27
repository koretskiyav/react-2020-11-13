import React from 'react';
import styles from './order.module.css';
import { connect } from 'react-redux';
import Item from './item';

function getProductsFromData(order, data) {
  if (data) {
    const itemsArr = Object.entries(order);
    const allProducts = [];

    data.forEach((rest) => {
      rest.menu.forEach((product) => {
        itemsArr.forEach((item) => {
          if (product.id === item[0]) {
            product.amount = item[1];
            allProducts.push(product);
          }
        });
      });
    });

    return allProducts;
  }
}

const Order = ({ order, data }) => {
  const allProducts = data ? getProductsFromData(order, data) : [];
  const totalSum = allProducts.reduce(
    (result, product) => result + product.price * product.amount,
    0
  );

  return (
    <div className={styles.order}>
      <h2>Basket</h2>

      <div>
        {allProducts.map((product) => (
          <Item key={product.id} product={product} amount={product.amount} />
        ))}
      </div>
      <h3 className={styles.total}>
        TOTAL: &nbsp;
        {totalSum}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  data: state.data.data,
});

export default connect(mapStateToProps)(Order);
