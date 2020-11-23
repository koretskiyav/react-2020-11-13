import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

Reviews.defaultProps = {
  reviews: [],
};

Reviews.propTypes = {
  reviews: arrayOf(
    shape({
      id: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
