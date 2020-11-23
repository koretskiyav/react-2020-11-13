import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div data-id="review" className={styles.review}>
    <div className={styles.content}>
      <div>
        <h4 data-id="review-user" className={styles.name}>
          {user}
        </h4>
        <p data-id="review-text" className={styles.comment}>
          {text}
        </p>
      </div>
      <div data-id="review-rate" className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
};

export default Review;
