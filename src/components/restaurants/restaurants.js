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

  /*is to be removed, when data is taken from back-end*/
  const allDishes = useMemo(
    () =>
      restaurants
        .flatMap(({ menu }) => [...menu])
        .reduce((obj, dish) => ({ [dish.id]: dish, ...obj }), {}),
    [restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <div>
        <Restaurant restaurant={activeRestaurant} allDishes={allDishes} />
        <Order allDishes={allDishes} />
      </div>
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
