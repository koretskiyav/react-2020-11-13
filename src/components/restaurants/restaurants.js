import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const tabs = Object.keys(restaurants).map((id) => ({
    title: restaurants[id].name,
    content: <Restaurant restaurant={restaurants[id]} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
