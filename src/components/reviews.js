import React from 'react';
import Rate from './rate';

export default function Reviews({reviews}) {
  return reviews.map(review => (
    <div key={review.id}>
      <b>{review.user}</b> · <Rate rating={review.rating} />
      <p>{review.text}</p>
    </div>
  ));
}
