import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <div>Имя: {review.user}</div>
          <div>Отзыв: {review.text}</div>
          <Rate rate={review.rating} />
        </div>
      ))}
    </div>
  );
}
