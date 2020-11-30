import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, setActiveRestaurant }) => {
  const { name, menu, reviews, id } = restaurant;

  setActiveRestaurant(id);

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} /> },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      //PropTypes.shape({rating: PropTypes.number.isRequired,}).isRequired
      PropTypes.string.isRequired
    ).isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setActiveRestaurant: (id) =>
    dispatch({
      type: 'SETACTIVERESTAURANT',
      payload: id,
    }),
});

export default connect(null, mapDispatchToProps)(Restaurant);
