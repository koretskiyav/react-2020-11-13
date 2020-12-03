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
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants, loadUsers } from '../../redux/actions';

const Restaurants = ({
  restaurants,
  loadRestaurants,
  restaurantsLoading,
  restaurantsLoaded,
  loadUsers,
  usersLoading,
  usersLoaded,
}) => {
  useEffect(() => {
    if (!restaurantsLoading && !restaurantsLoaded) loadRestaurants();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (!usersLoading && !usersLoaded) loadUsers();
  }, []); //eslint-disable-line

  if (restaurantsLoading || !restaurantsLoaded || usersLoading || !usersLoaded)
    return <Loader />;

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
    usersLoading: usersLoadingSelector(state),
    usersLoaded: usersLoadedSelector(state),
  }),
  { loadRestaurants, loadUsers }
)(Restaurants);
