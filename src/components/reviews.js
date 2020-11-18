import React, { useMemo } from 'react';
import { Review } from './review';
import { Rate } from './rate';
import style from './reviews.module.css';

export const Reviews = ({ reviews }) => {
  let restaurantMiddleRating = useMemo(
    () =>
      reviews.reduce((sum, current) => sum + current.rating, 0) /
      reviews.length,
    [reviews]
  );

  return (
    <div className={style.reviewsContainer}>
      <div className={style.reviewsTitle}>
        <h2>Reviews:</h2>
        <div className={style.reviewsRating}>
          <Rate rate={restaurantMiddleRating} />
          <h3>({reviews.length})</h3>
        </div>
      </div>

      <div>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
