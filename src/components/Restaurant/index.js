import React, { useMemo } from 'react';

import Reviews from '../Reviews';
import Menu from '../menu';
import Rate from '../Rate';

const prepareRating = (sum, count) => {
  return parseFloat((sum / count).toFixed(2));
};

export default function Restaurant({ restaurant } = {}) {
  const averageRating = useMemo(() => {
    const ratingSum = restaurant.reviews.reduce((result, { rating }) => {
      result = result + rating;
      return result;
    }, 0);

    return prepareRating(ratingSum, restaurant.reviews.length);
  }, [restaurant.reviews]);

  return (
    <div className="restaurant">
      <div className="restaurant-menu">
        <Menu menu={restaurant.menu} />
      </div>
      <div className="restaurant-reviews">
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="restaurant-rating">
        Средний рейтинг - <Rate value={averageRating} />
      </div>
    </div>
  );
}
