import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { setActive } from '../../redux/actions';

const Restaurants = ({ restaurants, setActiveRestaurant }) => {
  useEffect(() => {
    setActiveRestaurant({ id: Object.keys(restaurants)[0] });
  }, [restaurants, setActiveRestaurant]);

  const tabs = Object.values(restaurants).map((restaurant) => ({
    title: restaurant.name,
    id: restaurant.id,
    content: <Restaurant restaurant={restaurant} />,
  }));

  return <Tabs tabs={tabs} onSetActiveCallback={setActiveRestaurant} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveRestaurant: (entity) => dispatch(setActive(entity.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
