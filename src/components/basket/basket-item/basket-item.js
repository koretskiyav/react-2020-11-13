import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';
import { convert, CurrencyConsumer } from '../../../contexts/currency-context';

function BasketItem({
  product,
  amount,
  subtotal,
  restaurantId,
  increment,
  decrement,
  remove,
  disabled,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restaurantId}/menu`}>
          <span>{product.name}</span>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button
            onClick={() => decrement(product.id)}
            icon="minus"
            secondary
            small
            disabled={disabled}
          />
          <span className={styles.count}>{amount}</span>
          <Button
            onClick={() => increment(product.id)}
            icon="plus"
            secondary
            small
            disabled={disabled}
          />
        </div>
        <p className={cn(styles.count, styles.price)}>
          <CurrencyConsumer>
            {({ currency }) => convert(subtotal, currency)}
          </CurrencyConsumer>
        </p>
        <Button
          onClick={() => remove(product.id)}
          icon="delete"
          secondary
          small
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default connect(null, { increment, decrement, remove })(BasketItem);
