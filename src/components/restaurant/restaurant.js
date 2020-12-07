import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  const match = useRouteMatch();
  const menuUrl = `${match.url}/menu`;
  const reviewsUrl = `${match.url}/reviews`;
  console.log(match);

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          key={'menu'}
          to={menuUrl}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          key={'reviews'}
          to={reviewsUrl}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route
          path={`${match.path}/menu`}
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path={`${match.path}/reviews`}
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
