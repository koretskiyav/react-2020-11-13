import React from 'react';
import Rate from './rate';

export default function Review(props) {
  const { user, text, rating } = props.content;

  return (
    <div>
      <span>{user}</span>
      <span>
        {' '}
        rated this place in: <Rate rating={rating} />
      </span>
      <p>{text}</p>
    </div>
  );
}
