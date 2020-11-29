import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import {
  reviewsRestaurantSelector,
  reviewsUsersSelector,
} from '../../../redux/selectors';
import styles from './review.module.css';

const Review = ({ review, user }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  review: PropTypes.shape({
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, ownProps) => {
  const reviewElem = reviewsRestaurantSelector(state)[ownProps.reviewId];
  return {
    review: reviewElem,
    user: reviewsUsersSelector(state)[reviewElem.userId],
  };
})(Review);
