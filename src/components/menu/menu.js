import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../product';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string).isRequired,
    products: PropTypes.objectOf(PropTypes.objectOf).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, products } = this.props;

    if (this.state.error) {
      return <p>В этом ресторане меню не доступно</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((productId) => (
            <Product key={productId} product={products[productId]} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Menu);
