import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import { loadProducts } from '../../redux/actions';
import {
  productsKeysListSelector,
  productsLoadingSelector,
  isProductsLoadedSelector,
} from '../../redux/selectors';
import Loader from '../loader';
import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadProducts(this.props.id);
    }
  }
  componentDidUpdate() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadProducts(this.props.id);
    }
  }

  render() {
    if (this.props.loading || !this.props.loaded) return <Loader />;

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }
    return (
      <div className={styles.menu}>
        <div>
          {this.props.menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    menu: productsKeysListSelector(state, props),
    loading: productsLoadingSelector(state),
    loaded: isProductsLoadedSelector(state, props),
  }),
  { loadProducts }
)(Menu);
