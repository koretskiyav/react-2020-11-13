import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import OrderItem from './item';

import styles from './order.module.css';

export const Order = ({ order, products }) => {
  const orderedProducts = useMemo(() => Object.keys(order), [order]);
  const total = useMemo(
    () => orderedProducts.reduce((total, id) => total + products[id].price * order[id], 0),
    [orderedProducts]
  );

  if (orderedProducts.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className={styles.list}>
        {orderedProducts.map(id => (
          <OrderItem
            key={id}
            product={products[id]}
            amount={order[id]}
          />
        ))}
      </ul>

      <strong className={styles.total}>
        Total: {total}
      </strong>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  products: state.products
});

export default connect(mapStateToProps)(Order);
