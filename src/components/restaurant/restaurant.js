import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import cn from 'classnames';

import { Route, NavLink } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  // const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Menu', 'Reviews'];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        {tabs.map((title) => (
          <NavLink
            key={title}
            to={`/restaurants/${id}/${title.toLowerCase()}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {title}
          </NavLink>
        ))}
      </div>

      <Route path="/restaurants/:restId/menu">
        <Menu menu={menu} restaurantId={id} />
      </Route>
      <Route path="/restaurants/:restId/reviews">
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
