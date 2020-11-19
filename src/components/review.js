import React from 'react';
import Rate from './rate';

export default function Review(props) {
  return (
    <div>
      <p>
        <b>{props.review.user}</b> <Rate rating={props.review.rating} />
      </p>
      <p>{props.review.text}</p>
    </div>
  );
}
