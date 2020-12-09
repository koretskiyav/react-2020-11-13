import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';

import { loadRestaurants } from '../redux/actions';

function RestaurantsPage({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  match,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  const [{ id: firstRestId }] = restaurants;

  return (
    <Switch>
      <Redirect exact from="/restaurants" to={`/restaurants/${firstRestId}`} />
      <Route path="/restaurants/:restId" component={Restaurants} />
    </Switch>
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
