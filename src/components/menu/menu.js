import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import {
  productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

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
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  render() {
    const { menu } = this.props;

    if (this.props.loading || !this.props.loaded) return <Loader />;

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
}

const mapStateToProps = (state) => ({
  products: productsListSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProducts: () => dispatch(loadProducts(props.restaurantId)),
});

//&&
//    !this.props.loading &&
//  !this.props.loaded
//connect(null, { loadProducts })(

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
