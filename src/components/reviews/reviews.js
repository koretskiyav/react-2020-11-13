import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';
import { connect } from 'react-redux';
import {
  reviewsKeysListSelector,
  isReviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { loadReviews, loadUsers } from '../../redux/actions';

const Reviews = ({
  reviews,
  id,
  loadReviews,
  loadUsers,
  loading,
  loaded,
  loadingUsers,
  loadedUsers,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(id);
    if (!loadingUsers && !loadedUsers) loadUsers();
  }, [loadReviews, id]);

  if (loading || !loaded || loadingUsers || !loadedUsers) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={id} />
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, props) => ({
    reviews: reviewsKeysListSelector(state, props), // get only reviews by restaurant id
    loading: reviewsLoadingSelector(state),
    loaded: isReviewsLoadedSelector(state, props),
    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
