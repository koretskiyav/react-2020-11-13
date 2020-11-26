import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import DelIcon from '../product/icons/delete.svg';
import { decrement, increment, remove } from '../../redux/actions';

import styles from './order.module.css';

const Order = ({ productList, orderList, increment, decrement, remove }) => {
  const orderItems = useMemo(
    () =>
      Object.entries(orderList)
        .filter(([_, value]) => value > 0)
        .map(([key, _]) => productList.find((product) => product.id === key)),
    [orderList, productList]
  );

  const sumTotal = useMemo(
    () =>
      orderItems.reduce(
        (sum, product) => sum + orderList[product.id] * product.price,
        0
      ),
    [orderItems, orderList]
  );

  return (
    <div>
      {orderItems.map((product) => (
        <div key={product.id} className={styles.order}>
          <h4>{product.name}</h4>
          <h4>{orderList[product.id]}</h4>
          <h4>{product.price * orderList[product.id]} $</h4>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => decrement(product.id)}
              data-id="order-decrement"
            >
              <img src={MinusIcon} alt="minus" />
            </button>
            <button
              className={styles.button}
              onClick={() => increment(product.id)}
              data-id="order-increment"
            >
              <img src={PlusIcon} alt="plus" />
            </button>
            <button
              className={styles.button}
              onClick={() => remove(product.id)}
              data-id="order-remove"
            >
              <img src={DelIcon} alt="remove" />
            </button>
          </div>
        </div>
      ))}
      <h3>Total: {sumTotal} $</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderList: state.order,
  productList: state.productList,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(increment(id)),
  decrement: (id) => dispatch(decrement(id)),
  remove: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
