import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../product';
import Basket from '../basket';
import styles from './menu.module.css';
import Loader from '../loader';

import {
  productsSelector,
  // productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

const Menu = ({ products, restaurantId, loadProducts, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadProducts(restaurantId);
    }
  }, [products, restaurantId, loading, loaded, loadProducts]);
  if ((loading || !loaded) && !products) return <Loader />;
  //
  return (
    <div className={styles.menu}>
      <div>
        {Object.values(products).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    products: productsSelector(state, ownProps.restaurantId),
    loading: productsLoadingSelector(state, ownProps.restaurantId),
    loaded: productsLoadedSelector(state, ownProps.restaurantId),
    restaurantId: ownProps.restaurantId,
  }),
  { loadProducts }
)(Menu);
