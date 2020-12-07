import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
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
  loadRestaurants,
  loading,
  loaded,
  restaurants,
  match,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    return (
      <div>
        <div>select page</div>
        {restaurants.map(({ id, name }) => (
          <div key={id}>
            <Link to={`/restaurants/${id}`}>{name}</Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Route path="/restaurants/:restId/:section?" component={Restaurants} />
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
