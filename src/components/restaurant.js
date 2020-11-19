import React from 'react';

import Reviews from './Reviews/reviews';

export default function Restaurant(props) {
  return (
    <div>
      {props.review.map((reviews) => {
        return (
          <Reviews
            key={reviews.id}
            user={reviews.user}
            text={reviews.text}
            rating={reviews.rating}
          />
        );
      })}
    </div>
  );
}
