import React from 'react';
import Review from './review';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0
        ? reviews.map((review) => <Review key={review.id} {...review} />)
        : 'No reviews'}
    </div>
  );
}
