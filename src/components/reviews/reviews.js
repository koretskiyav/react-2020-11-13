import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div data-id="reviews" className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
