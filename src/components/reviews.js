import React, { useMemo } from 'react';
import Rate from './rate';
import Review from './review';

export default function Reviews(props) {
  return (
    <div>
      <div>
        {props.reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}
