import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <>
      {props.reviews.map((review) => (
        <div key={review.id} className="reviewBox">
          <p>
            User : <span className="reviewUser">{review.user}</span>
          </p>
          <p className="reviewText">{review.text}</p>
          <span>Rating: </span>
          <Rate rate={review.rating} />
        </div>
      ))}
    </>
  );
}
