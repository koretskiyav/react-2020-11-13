import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { addReview } from '../../redux/actions';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, addNewReview, averageRating }) => {
  const { name, menu, reviews } = restaurant;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} addNewReview={addNewReview} />,
    },
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
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  averageRating: averageRatingSelector(state, ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNewReview: (values) =>
    dispatch(addReview({ ...values, restaurantId: ownProps.restaurant.id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
