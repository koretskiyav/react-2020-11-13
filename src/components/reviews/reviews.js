import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import { loadUsers } from '../../redux/actions';
import {
  isRestaurantReviewsLoading as isLoading,
  isRestaurantReviewsLoaded as isLoaded
} from '../../redux/selectors';

const Reviews = ({ reviews, restaurantId, loadUsers, isLoading, isLoaded }) => {
  useEffect(() => loadUsers(), [loadUsers]);

  if (isLoading || !isLoaded) {
    return <Loader />
  }

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading,
  isLoaded
});

export default connect(mapStateToProps, { loadUsers })(Reviews);
