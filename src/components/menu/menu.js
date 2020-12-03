import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import {
  productsLoadedSelector,
  productsLoadingSelector,
  hasRestaurantProductsVisited,
} from '../../redux/selectors';
import styles from './menu.module.css';
import { loadProducts } from '../../redux/actions';

const Menu = ({
  restaurantId,
  menu,
  loading,
  loaded,
  loadProducts,
  visited,
}) => {
  useEffect(() => {
    if (!visited && !loading) loadProducts(restaurantId);
  }, [loadProducts, restaurantId, visited, loading]);

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

Menu.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
};

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
    visited: hasRestaurantProductsVisited(state, props),
  }),
  { loadProducts }
)(Menu);
