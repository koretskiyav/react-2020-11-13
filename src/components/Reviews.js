import React from 'react';
import Rate from './Rate';

const Reviews = React.memo(({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <Review {...review} key={review.id} />
    ))}
  </div>
));

const Review = ({ user, text, rating }) => (
  <>
    <h3>{user}</h3>
    <p>{text}</p>
    <Rate rating={rating} />
  </>
);

export default Reviews;
