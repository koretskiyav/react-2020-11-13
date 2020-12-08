import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <div className={styles.tabs}>
        <NavLink
          exact
          to={`/restaurants/${id}`}
          className={styles.tab}
          activeClassName={styles.active}>
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${id}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}>
          Reviews
        </NavLink>
      </div>

      <Route exact path="/restaurants/:id">
        <Menu menu={menu} restaurantId={id} />
      </Route>

      <Route path="/restaurants/:id/reviews">
        <Reviews reviews={reviews} restaurantId={id} />
      </Route>
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
