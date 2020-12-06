import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import { restaurantsListSelector } from '../../redux/selectors';

import Tabs from '../tabs';

const Restaurants = ({ restaurants, match }) => {
  const { restId } = match.params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);

  const tabs = restaurants.map((restaurant) => ({
    id: restaurant.id,
    title: restaurant.name,
    to: `/restaurants/${restaurant.id}`,
  }));

  return (
    <>
      <Tabs tabs={tabs} />
      <Restaurant {...restaurant} />
    </>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(Restaurants);
