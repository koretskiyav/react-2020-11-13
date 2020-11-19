import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div style={{ marginBottom: '20px', border: '1px solid red' }}>
          <p>{review.user}</p>
          <p>"{review.text}"</p>
          <span>
            <Rate key={review.id} rating={review.rating} />
          </span>
        </div>
      ))}
    </div>
  );
}
