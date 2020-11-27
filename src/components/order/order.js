import React from 'react';
import { connect } from 'react-redux';
import OrderProduct from './order-product';
import styles from './order.module.css';

/**
 * @param {object[]} products Product objects
 * @returns {React.Element} Node with the total price in the order
 */
function getTotalPriceNode(products) {
  if (products.length) {
    const totalPrice = products.reduce(
      (totalPrice, product) => totalPrice + product.totalPrice,
      0
    );
    return <div className={styles.total}>Total sum: {totalPrice} $</div>;
  }
}

/**
 * @returns {React.Element}
 */
function getTableHead() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Sum</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

/**
 * @param {object} product Product object
 * @returns {React.Element[]} Order product row nodes
 */
function getProductRows(products) {
  const rows = products.map((product) => (
    <OrderProduct key={product.id} product={product} />
  ));
  return <tbody>{rows}</tbody>;
}

/**
 * @param {array} order Order info: [ [id, amount], ... ], or cart.
 * @param {object[]} allProducts All available products: { [id]: {id: [id], price: ...}, ... }
 * @returns {object[]} Product objects added to the cart (order)
 */
function getOrderProducts(order, allProducts) {
  return order.map((orderInfo) => {
    const [id, amount] = orderInfo;
    return {
      ...allProducts[id],
      amount: amount,
      totalPrice: amount * allProducts[id].price,
    };
  });
}

const Order = (props) => {
  const order = Object.entries(props.order);
  const allProducts = props.products;
  const products = getOrderProducts(order, allProducts);
  const totalContainer = getTotalPriceNode(products);
  const headContainer = products.length ? getTableHead() : undefined;
  const bodyContainer = getProductRows(products);
  return (
    <div>
      <table>
        {headContainer}
        {bodyContainer}
      </table>
      {totalContainer}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  products: state.products,
});

export default connect(mapStateToProps)(Order);
