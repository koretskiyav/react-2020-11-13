import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-test="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
