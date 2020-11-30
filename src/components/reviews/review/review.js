import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeGetReview, makeGetReviewUser } from '../../../redux/selectors';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, user }) => {
  const { text, rating } = review;
  const userName = useMemo(() => user.name || 'Anonymous', [user]);

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {userName}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

const makeMapStateToProps = (initialState, { id }) => {
  const getReview = makeGetReview(id);
  const getReviewUser = makeGetReviewUser(id);

  return (state) => ({
    review: getReview(state),
    user: getReviewUser(state),
  });
};

export default connect(makeMapStateToProps)(Review);
