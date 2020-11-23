import React from 'react';
import styles from './navigation.module.css';
import { arrayOf, shape, string, func } from 'prop-types';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

Navigation.propTypes = {
  restaurants: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: func.isRequired,
};

export default Navigation;
