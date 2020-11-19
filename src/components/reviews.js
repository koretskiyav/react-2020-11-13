import React from 'react';
import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>User: {review.user}</p>
          <p>Feedback: {review.text}</p>
          <Rate rating={review.rating} />
        </div>
      ))}
    </div>
  );
}
