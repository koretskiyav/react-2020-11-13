import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, rId }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  reviews: ownProps.reviews.map((id) => {
    return state.reviews[id];
  }),
});

// export default Reviews;

export default connect(mapStateToProps)(Reviews);
