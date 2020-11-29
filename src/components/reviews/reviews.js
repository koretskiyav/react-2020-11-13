import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((reviewId) => (
        <Review key={reviewId} reviewId={reviewId} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  restaurantId: PropTypes.string.isRequired,
};

export default Reviews;
