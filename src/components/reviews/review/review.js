import React from 'react';

import Rate from '../../rate';
import PropTypes from 'prop-types';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content} data-id="review-content">
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
  text: '',
  rating: 0,
};

Review.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Review;
