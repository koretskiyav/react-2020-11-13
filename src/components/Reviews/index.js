import React from 'react';

import Rate from '../Rate';

export default function Reviews({ reviews } = {}) {
  if (!reviews || !reviews.length) return null;

  const reviewsComponent = reviews.map(({ id, user, text, rating }) => (
    <div key={id} className="review">
      {user && <div className="review-user">{user}</div>}
      {text && <div className="review-text">{text}</div>}
      {rating && (
        <div className="review-rating">
          <Rate value={rating} />
        </div>
      )}
    </div>
  ));

  return <div className="reviews">{reviewsComponent}</div>;
}
