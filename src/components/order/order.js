import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import Item from './item';
import styles from './order.module.css';

const Order = ({ order, items, products }) => {
  const total = useMemo(() => {
    return items.reduce((acc, id) => {
      const count = order[id];
      const price = products[id].price;
      const subTotal = count * price;

      return (acc += subTotal);
    }, 0);
  }, [order, products, items]);

  return (
    <div className={styles.order}>
      <h3 className={styles.header}>Basket</h3>
      <div className={styles.items}>
        {items.map((key) => (
          <Item key={key} id={key} count={order[key]} {...products[key]} />
        ))}
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <span>{total} $</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state = {}) => ({
  order: state.order,
  items: Object.keys(state.order) || [],
  products: state.products,
});

export default connect(mapStateToProps)(Order);
