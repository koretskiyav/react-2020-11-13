import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  averageRatingSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  hasRestaurantReviewsVisited,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';

const Restaurant = ({
  id,
  name,
  menu,
  reviews,
  averageRating,
  loadReviews,
  reviewsLoading,
  reviewsLoaded,
  visited,
}) => {
  useEffect(() => {
    if (!visited && !reviewsLoading) loadReviews(id);
  }, [loadReviews, id, visited, reviewsLoading]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  if (reviewsLoading || !reviewsLoaded) return <Loader />;

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
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  visited: PropTypes.bool,
  averageRating: PropTypes.number,
};

export default connect(
  (state, props) => ({
    averageRating: averageRatingSelector(state, props),
    reviewsLoading: reviewsLoadingSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state),
    visited: hasRestaurantReviewsVisited(state, {
      restaurantId: props.id,
      ...props,
    }),
  }),
  { loadReviews }
)(Restaurant);
