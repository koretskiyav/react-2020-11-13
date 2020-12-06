import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          to={`/restaurants/${id}/menu`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${id}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Redirect
          exact
          from={`/restaurants/${id}/`}
          to={`/restaurants/${id}/menu`}
        />
        <Route
          path={`/restaurants/${id}/menu`}
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path={`/restaurants/${id}/reviews`}
          render={() => <Reviews reviews={reviews} restaurantId={id} />}
        />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
