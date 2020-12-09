import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './order-confirmation.module.css';
import { orderErrorSelector } from '../redux/selectors';

function OrderConfirmationPage({ error }) {
  if (error) {
    return <h1 className={styles.error}>Order Error: {error}</h1>;
  }
  return <h1 className={styles.success}>Order Confirmed</h1>;
}

const mapStateToProps = createStructuredSelector({
  error: orderErrorSelector,
});

export default connect(mapStateToProps)(OrderConfirmationPage);
