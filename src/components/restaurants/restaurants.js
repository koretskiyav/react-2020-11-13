import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  // const tabs = restaurants.map((restaurant) => ({
  //   title: restaurant.name,
  //   content: <Restaurant restaurant={restaurant} />,
  const tabs = [];
  for (const key in restaurants) {
    const restaurant = restaurants[key];

    const tab = {
      title: restaurant.name,
      content: <Restaurant restaurant={restaurant} />,
    };
    tabs.push(tab);
  }
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
