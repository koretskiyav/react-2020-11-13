import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import Loader from '../loader';
import { loadReviews } from '../../redux/actions';

import {
  reviewsSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors.js';

const Reviews = ({ reviews, restaurantId, loadReviews, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadReviews(restaurantId);
    }
  }, [reviews, restaurantId, loading, loaded, loadReviews]);
  if ((loading || !loaded) && !reviews) return <Loader />;

  return (
    <div className={styles.reviews}>
      {Object.values(reviews).map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, ownProps) => ({
    reviews: reviewsSelector(state, ownProps.restaurantId),
    loading: reviewsLoadingSelector(state, ownProps.restaurantId),
    loaded: reviewsLoadedSelector(state, ownProps.restaurantId),
    restaurantId: ownProps.restaurantId,
  }),
  { loadReviews }
)(Reviews);
