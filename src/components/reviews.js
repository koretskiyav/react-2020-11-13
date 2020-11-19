import React from 'react';
import Review from './review';

const Reviews = ({ reviews = [], className = '' }) => {
  return (
    <div className={`reviews ${className}`}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;
