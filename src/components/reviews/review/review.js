import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';
import {
  reviewsRestaurantSelector,
  reviewsUsersSelector,
} from '../../../redux/selectors';

const Review = ({ text, user, rating }) => {
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
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => {
  const review = reviewsRestaurantSelector(state)[ownProps.id];

  return {
    text: reviewsRestaurantSelector(state)[ownProps.id].text,
    user: reviewsUsersSelector(state)[review.userId].name,
    rating: reviewsRestaurantSelector(state)[ownProps.id].rating,
  };
};

export default connect(mapStateToProps)(Review);
