import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import {
  restaurantMenuLoadedSelector,
  restaurantMenuLoadingSelector,
  restaurantMenuSelector,
} from '../../redux/selectors';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';

class Menu extends React.Component {
  static propTypes = {
    restaurantId: PropTypes.string.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  _loadMenu() {
    const { loading, loaded, loadProducts, restaurantId } = this.props;

    if (!loading && !loaded) {
      loadProducts(restaurantId);
    }
  }

  componentDidMount() {
    this._loadMenu();
  }

  componentDidUpdate(prevProps) {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      this._loadMenu();
    }
  }

  render() {
    if (this.props.loading || !this.props.loaded) return <Loader />;
    const menu = this.props.products;

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {Object.values(menu).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { restaurantId }) => ({
  products: restaurantMenuSelector(state, restaurantId),
  loading: restaurantMenuLoadingSelector(state, restaurantId),
  loaded: restaurantMenuLoadedSelector(state, restaurantId),
});

export default connect(mapStateToProps, { loadProducts })(Menu);
