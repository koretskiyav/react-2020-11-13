import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, user }) => {
  const { text, rating } = review;

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
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
};

Review.propTypes = {
  user: PropTypes.string,
  review: PropTypes.shape({
    test: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = ({ reviews, users }, { id }) => ({
  review: reviews[id],
  user: users[reviews[id].userId].name,
});

export default connect(mapStateToProps)(Review);
