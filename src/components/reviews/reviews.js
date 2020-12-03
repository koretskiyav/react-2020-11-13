import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import Loader from '../loader';
import {
  reviewsListSelector,
  usersListSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';
import { loadUsers } from '../../redux/actions';

const Reviews = ({ reviews, restaurantId, loadUsers, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadUsers();
    }
  }, [loadUsers, restaurantId]); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} id={review.id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  (state) => ({
    reviews: reviewsListSelector(state),
    users: usersListSelector(state),
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
  }),
  { loadUsers }
)(Reviews);
