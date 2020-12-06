import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  const MENU = 'menu';
  const REVIEWS = 'reviews';
  const match = useRouteMatch();
  const tabs = [
    {
      title: 'Menu',
      id: `${id}_menu`,
      to: `${match.url}/${MENU}`,
    },
    {
      title: 'Reviews',
      id: `${id}_reviews`,
      to: `${match.url}/${REVIEWS}`,
    },
  ];

  /*as an option, active tab can be stored at redux store*/
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Switch>
        <Route path={`${match.path}/${REVIEWS}`} exact>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
        <Route path={`${match.path}/${MENU}`} exact>
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Redirect to={`${match.url}/${MENU}`} />
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
