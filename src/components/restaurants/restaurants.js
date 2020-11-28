import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  console.log(restaurants);
  const tabs = Object.keys(restaurants).map((restaurantId) => ({
    title: restaurants[restaurantId].name,
    content: <Restaurant restaurant={restaurants[restaurantId]} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
