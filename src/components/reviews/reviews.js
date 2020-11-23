import React from 'react';
import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return (
      <div className={styles.reviews} data-id="reviews">
        <p>No reviews</p>
      </div>
    );
  }

  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired
  ),
};

export default Reviews;
