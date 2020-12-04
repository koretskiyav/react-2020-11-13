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
import { createStructuredSelector } from 'reselect';

const Restaurants = ({ restaurants, loadRestaurants, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

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

const mapStateToProps = createStructuredSelector({
  restaurants: restaurantsListSelector,
  loading: restaurantsLoadingSelector,
  loaded: restaurantsLoadedSelector,
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
