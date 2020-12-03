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

const Reviews = ({ reviews, id, loadReviews, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(id);
  }, [loadReviews, id]);

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={id} />
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, props) => ({
    reviews: reviewsKeysListSelector(state, props), // get only reviews by restaurant id
    loading: reviewsLoadingSelector(state),
    loaded: isReviewsLoadedSelector(state, props),
  }),
  { loadReviews }
)(Reviews);
