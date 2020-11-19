import React from 'react';
import Rating from './rating';

function Rate(props) {
  const { reviews } = props;
  const rating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div>
      <h3>Overall rating: {rating.toFixed(1)}</h3>
      <Rating rating={rating} size={40} />
    </div>
  );
}

export default Rate;
