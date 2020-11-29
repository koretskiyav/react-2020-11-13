import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { restaurants } from '../../fixtures';

const Restaurant = ({ restaurant, reviews }) => {
  // const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = restaurant.reviews.reduce(
      (acc, id) => acc + reviews[id]['rating'],
      0
    );
    return Math.round(total / restaurant.reviews.length);
  }, [restaurant.reviews, reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={restaurant.menu} /> },
    {
      title: 'Reviews',
      content: <Reviews restId={restaurant.id} reviews={restaurant.reviews} />,
    },
  ];

  return (
    <div>
      <Banner heading={restaurant.name}>
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
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.id] || 0,
  restaurant: state.restaurants[ownProps.id],
  reviews: state.reviews,
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   increment: () => dispatch(increment(ownProps.id)),
//   decrement: () => dispatch(decrement(ownProps.id)),
// });

export default connect(mapStateToProps)(Restaurant);
