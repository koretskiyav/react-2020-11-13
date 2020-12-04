import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';
import {
  isRestaurantProductsLoading as isLoading,
  isRestaurantProductsLoaded as isLoaded
} from '../../redux/selectors';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate() {
    this.loadProducts();
  }

  render() {
    const { menu, isLoading, isLoaded }  = this.props;

    if (isLoading || !isLoaded) {
      return <Loader />
    }

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

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
  }

  loadProducts() {
    const { isLoading, isLoaded, loadProducts } = this.props;
    if (!isLoading && !isLoaded) loadProducts();
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading,
  isLoaded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadProducts: () => dispatch(loadProducts(ownProps.restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
