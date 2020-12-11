import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
  firstRestaurantIdSelector,
} from '../redux/selectors';

import { loadRestaurants } from '../redux/actions';

function RestaurantsPage({
  loadRestaurants,
  loading,
  loaded,
  match,
  firstRestId,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    return <Redirect from="/restaurants" to={`/restaurants/${firstRestId}`} />;
  }

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  createStructuredSelector({
    firstRestId: firstRestaurantIdSelector,
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
