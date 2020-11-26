import React from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';

const Order = ({
  totalPrice,
  totalProducts,
  orderItems,
  restaurants,
  increment,
  decrement,
}) => {
  return (
    <div className={styles.order}>
      <div>
        {restaurants.map((restaurant) => {
          return restaurant.menu.map(({ id, name, price }) => {
            if (orderItems[id] !== undefined && orderItems[id]) {
              return (
                <div className={styles.product} key={id}>
                  <span className={styles.productName}>{name}</span>
                  <div className={styles.buttons}>
                    <button
                      className={styles.button}
                      onClick={decrement}
                      data-id="product-decrement"
                    >
                      <img src={MinusIcon} alt="minus" />
                    </button>
                    <button
                      className={styles.button}
                      onClick={increment}
                      data-id="product-increment"
                    >
                      <img src={PlusIcon} alt="plus" />
                    </button>
                  </div>
                  <span className={styles.productPrice}>{price}$</span>
                </div>
              );
            }
          });
        })}
      </div>
      <div className={styles.total}>
        <span className={styles.totalTitle}>Total products:</span>
        <span> {totalProducts}</span>
      </div>
      <div className={styles.total}>
        <span className={styles.totalTitle}>Total price:</span>
        <span> {totalPrice}$</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalProducts: state.order.totalProducts || 0,
    totalPrice: state.order.totalPrice || 0,
    orderItems: state.order || 0,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // increment: () => dispatch(increment(ownProps.product.id)),
  // decrement: () => dispatch(decrement(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
