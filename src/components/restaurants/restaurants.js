import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {restaurantListSelector} from '../../redux/selectors';
import {selectRestaurant} from '../../redux/actions';

const Restaurants = ({ restaurants, activeRestaurant, selectRestaurant }) => {
  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant} />,
  }));

  const changeTab = (index) => selectRestaurant(restaurants[index].id);
  const initialActiveTab = restaurants.findIndex(restaurant => activeRestaurant === restaurant.id);

  return <Tabs tabs={tabs} initialActiveTab={initialActiveTab} onChange={changeTab} />;
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
    restaurants: restaurantListSelector(state),
    activeRestaurant: state.activeRestaurant
  }),
  (dispatch) => ({
    selectRestaurant: id => dispatch(selectRestaurant(id))
  })
)(Restaurants);
