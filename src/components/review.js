import React from 'react';
import Rate from './rate';

export default function Review({ user, text, rating }) {
  return (
    <p>
      <span>User: {user}</span>
      <br />
      <span>Review: {text}</span>
      <br />
      <Rate rating={rating} />
    </p>
  );
}
