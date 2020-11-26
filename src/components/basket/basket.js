import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, remove } from '../../redux/actions';
import style from './basket.module.css';
import styles from '../product/product.module.css';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
// {id: {
// amount: 1,
// name: '',
// price: 15
// },
// id2: {}
// }
// [{id, amount, name, price}] {id: amount, id2: amount}
/*
{
  orders: [ {}, {}, ..., {}]
}
 */

const Basket = ({ order, increment, decrement, remove }) => {
  return (
    <div>
      {order.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>{item.amount}</span>
          <span>
            <button onClick={() => decrement(item.id)}>-</button>
            <button onClick={() => increment(item.id)}>+</button>
            <button onClick={() => remove(item.id)}>x</button>
          </span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  order: ownProps.restaurants.reduce((order, { menu }) => {
    menu.reduce((order, { id, name, price }) => {
      if (state.order[id]) {
        order.push({ id, name, price, amount: state.order[id] });
      }

      return order;
    }, order);

    return order;
  }, []),
});

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => {
    dispatch(increment(id));
  },
  decrement: (id) => {
    dispatch(decrement(id));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
