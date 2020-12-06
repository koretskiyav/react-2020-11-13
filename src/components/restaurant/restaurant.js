import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Route, NavLink } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';
import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating, match }) => {
  const menuUrl = `${match.url}/menu`;
  const reviewsUrl = `${match.url}/reviews`;
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          to={menuUrl}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          to={reviewsUrl}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Route
        path={menuUrl}
        render={() => <Menu menu={menu} restaurantId={id} />}
      />
      <Route
        path={reviewsUrl}
        render={() => <Reviews reviews={reviews} restaurantId={id} />}
      />
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
