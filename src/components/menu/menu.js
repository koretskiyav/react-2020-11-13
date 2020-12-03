import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.object.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu } = this.props;

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

export default Menu;
