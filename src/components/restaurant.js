import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import style from '../css/restaurant.module.css';

export default function Restaurant({ restaurant }) {
  const reducer = (sum, review) => (sum += review.rating);

  const restaurantRate = (
    restaurant.reviews.reduce(reducer, 0) / restaurant.reviews.length
  ).toFixed(1);

  return (
    <div className={style.restaurant}>
      <h3 className={style.restaurant__rating}>
        Рейтинг ресторана: {restaurantRate}
      </h3>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
