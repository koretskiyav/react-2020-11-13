import React, { useMemo } from 'react';

import { decrement, increment, reset } from '../../../redux/actions';

import styles from './item.module.css';
import MinusIcon from '../../icons/minus.svg';
import PlusIcon from '../../icons/plus.svg';
import { connect } from 'react-redux';
import CloseIcon from '../../icons/close.svg';

const Item = ({ name, price, count, increment, decrement, reset }) => {
  const total = useMemo(() => price * count, [count, price]);

  if (count === 0) return null;

  return (
    <div className={styles.item}>
      <span className={styles.name}>{name}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrement}>
          <img src={MinusIcon} alt="minus" />
        </button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={increment}>
          <img src={PlusIcon} alt="plus" />
        </button>
        <button className={styles.button} onClick={reset}>
          <img src={CloseIcon} alt="close" />
        </button>
      </div>
      <span className={styles.column}>{total} $</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.id)),
  decrement: () => dispatch(decrement(ownProps.id)),
  reset: () => dispatch(reset(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(Item);
