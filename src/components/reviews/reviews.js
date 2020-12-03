import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';

import { loadReviews, loadUsers } from '../../redux/actions';
import Loader from '../loader';
import {
  restaurantReviewsLoadedSelector,
  restaurantReviewsLoadingSelector,
  reviewsListSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  reviewsLoading,
  reviewsLoaded,
  loadUsers,
  usersLoading,
  usersLoaded,
}) => {
  useEffect(() => {
    if (!reviewsLoading && !reviewsLoaded) loadReviews(restaurantId);
  }, [loadReviews, restaurantId]); // eslint-disable-line

  useEffect(() => {
    if (!usersLoading && !usersLoaded) loadUsers();
  }, []); //eslint-disable-line

  if (reviewsLoading || !reviewsLoaded || usersLoading || !usersLoaded)
    return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { restaurantId }) => ({
  reviewsLoading: restaurantReviewsLoadingSelector(state, restaurantId),
  reviewsLoaded: restaurantReviewsLoadedSelector(state, restaurantId),
  reviews: reviewsListSelector(state, restaurantId),
  usersLoading: usersLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
