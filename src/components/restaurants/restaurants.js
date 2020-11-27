import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import Order from '../order/order';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  const restaurantProducts = restaurants
    .flatMap(({ menu }) => menu)
    .reduce((obj, el) => {
      return {
        [el.id]: el,
        ...obj,
      };
    }, {});

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
      <Order products={restaurantProducts} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
