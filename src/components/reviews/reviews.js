import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';
import { connect } from 'react-redux';
import {
  reviewsKeysListSelector,
  isReviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';

const Reviews = ({ reviews, restaurantId, loadReviews, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
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
  (state, props) => ({
    reviews: reviewsKeysListSelector(state), // get only reviews by restaurant id
    loading: reviewsLoadingSelector(state),
    loaded: isReviewsLoadedSelector(state, props),
  }),
  { loadReviews }
)(Reviews);
