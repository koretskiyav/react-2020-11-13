import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { makeRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { name, menu, reviews } = restaurant;

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
      PropTypes.string.isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = () => {
  const ratingSelector = makeRatingSelector();

  return (state, ownProps) => ({
    averageRating: ratingSelector(state, ownProps.restaurant.id)
  });
};

export default connect(mapStateToProps)(Restaurant);
