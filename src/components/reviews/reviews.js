import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  reviewsOfRestaurantsLoadingSelector,
  reviewsOfRestaurantsLoadedSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';
import Loader from '../loader';

const Reviews = ({ reviews, restaurantId, loadReviews, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  if (loading || !loaded) return <Loader />;

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
  loading: reviewsOfRestaurantsLoadingSelector,
  loaded: reviewsOfRestaurantsLoadedSelector,
});

export default connect(mapStateToProps, { loadReviews })(Reviews);
