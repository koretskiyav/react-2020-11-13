import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';
import { connect } from 'react-redux';

import { loadUsers } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviewsLoading,
  reviewsLoaded,
  usersLoading,
  restaurantId,
  usersLoaded,
  loadUsers,
  reviews,
}) => {
  const loading = useMemo(
    () => usersLoading || !usersLoaded || reviewsLoading || !reviewsLoaded,
    [usersLoading, usersLoaded, reviewsLoading, reviewsLoaded]
  );

  useEffect(() => {
    if (!usersLoading && !usersLoaded) loadUsers();
  }, [loadUsers, usersLoading, usersLoaded]);

  if (loading) return <Loader />;

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

export default connect(
  (state) => ({
    usersLoading: usersLoadingSelector(state),
    usersLoaded: usersLoadedSelector(state),
    reviewsLoading: reviewsLoadingSelector(state),
    reviewsLoaded: reviewsLoadedSelector(state),
  }),
  { loadUsers }
)(Reviews);
