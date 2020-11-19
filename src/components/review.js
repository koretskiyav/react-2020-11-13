import React from 'react';
import Rate from './rate';

const Review = ({ user, text, rating }) => {
  return (
    <div className="review">
      <p>{user}</p>
      <p>{text}</p>
      <Rate rating={rating} />
    </div>
  );
};

export default Review;
