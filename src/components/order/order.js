import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, removeAll } from '../../redux/actions';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';

const Order = ({ products, menus, increment, decrement, removeAll }) => {
  const productsId = useMemo(
    () =>
      Object.entries(products)
        .filter(([_, amount]) => amount > 0)
        .map(([id, _]) => id),
    [products]
  );

  const productsData = useMemo(
    () => menus.filter((pr) => productsId.includes(pr.id)),
    [menus, productsId]
  );

  const totalSum = useMemo(
    () => productsData.reduce((acc, pr) => acc + pr.price * products[pr.id], 0),
    [productsData, products]
  );

  return (
    <div>
      <p>Order items :</p>
      <ul>
        {productsData.map((product) => (
          <li key={product.id}>
            <p>Item name: {product.name}</p>
            <p>Amount: {products[product.id]}</p>
            <p>Item Price: {product.price * products[product.id]} $</p>
            <div>
              <button onClick={() => decrement(product.id)}>
                <img src={MinusIcon} alt="minus" />
              </button>
              <button onClick={() => increment(product.id)}>
                <img src={PlusIcon} alt="plus" />
              </button>
              <button onClick={() => removeAll(product.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total price: {totalSum} $</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.order,
});

const mapDispatchToProps = {
  increment,
  decrement,
  removeAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
