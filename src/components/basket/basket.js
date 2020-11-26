import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, remove } from '../../redux/actions';

const Basket = ({ order, increment, decrement, remove }) => {
  const totalPrice = useMemo(
    () => order.reduce((total, { price, amount }) => total + price * amount, 0),
    [order]
  );

  return (
    <div>
      {order.map(({ id, name, price, amount }) => (
        <div key={id}>
          <span>{`${name}, ${price} $ - ${amount} ${price * amount} $`}</span>

          <span>
            <button onClick={() => decrement(id)}>-</button>
            <button onClick={() => increment(id)}>+</button>
            <button onClick={() => remove(id)}>x</button>
          </span>
        </div>
      ))}
      <div>{`total ${totalPrice} $`}</div>
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
