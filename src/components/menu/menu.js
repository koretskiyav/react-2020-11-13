import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import { loadProducts } from '../../redux/actions';
import { menuLoadedSelector, menuLoadingSelector } from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';

import styles from './menu.module.css';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    restaurantId: PropTypes.string.isRequired,
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.restaurantId !== prevProps.restaurantId &&
      !this.props.loading &&
      !this.props.loaded
    ) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  render() {
    const { menu, loaded, loading } = this.props;

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

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
  }
}

const mapStateToProps = createStructuredSelector({
  loading: menuLoadingSelector,
  loaded: menuLoadedSelector,
});

export default connect(mapStateToProps, { loadProducts })(Menu);
