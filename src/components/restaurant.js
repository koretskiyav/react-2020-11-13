import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant({restaurant}) {
  const averageRating = useMemo(
    () => {
      const averageRating = restaurant.reviews
        .map(review => review.rating)
        .reduce((sum, rating) => sum + rating, 0) / restaurant.reviews.length;

      return Math.floor(averageRating * 10) / 10;
    },
    [restaurant.reviews]
  );

  return (
    <div>
      <h2>Rating: {averageRating}</h2>
      <h2>Menu</h2>
      <Menu menu={restaurant.menu} />
      <h2>Reviews</h2>
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}
