import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.user}</p>
          {review.text}
          <Rate rating={review.rating} />
        </div>
      ))}
    </div>
  );
}
