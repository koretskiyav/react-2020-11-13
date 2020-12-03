import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({
  restaurants,
  loadRestaurants,
  restaurantsLoading,
  restaurantsLoaded,
}) => {
  useEffect(() => {
    if (!restaurantsLoading && !restaurantsLoaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (restaurantsLoading || !restaurantsLoaded) return <Loader />;

  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant {...restaurant} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    restaurantsLoading: restaurantsLoadingSelector(state),
    restaurantsLoaded: restaurantsLoadedSelector(state),
  }),
  { loadRestaurants }
)(Restaurants);
