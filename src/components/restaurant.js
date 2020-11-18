import React, { useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ menu, reviews, name }) {
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;

    const avg =
      reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length;

    return Math.round(avg * 100) / 100;
  }, [reviews]);

  return (
    <div>
      <h1>{name}</h1>
      <Rate rating={averageRating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
