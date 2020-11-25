import React from 'react';
import styles from './order.module.css';
import { connect } from 'react-redux';
import Item from './item';

const Order = ({ order }) => {
  let itemsArr = Object.entries(order);
  console.log(itemsArr);

  return (
    <div className={styles.order}>
      <h2>Basket</h2>

      <div>
        {itemsArr.map((item) => (
          <Item key={item[0]} product={item[0]} amount={item[1]} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
