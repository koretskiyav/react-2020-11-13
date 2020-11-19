import React, { useMemo } from 'react';
import Menu from '../menu';
import Reviews from '../reviews/reviews';
import Rate from '../rate';
import style from './restaurant.module.css';

export default function Restaurant(props) {
  const { activeRestaurant } = props;

  const averageRating = useMemo(() => {
    let sum = activeRestaurant.reviews.reduce((a, b) => {
      return { rating: a.rating + b.rating };
    });
    return parseFloat(
      (sum.rating / activeRestaurant.reviews.length).toFixed(1)
    );
  }, [activeRestaurant.reviews]);

  return (
    <div className={style.restaurant}>
      <div className={style.restaurant_header}>
        {activeRestaurant.name} <Rate rating={averageRating} />
      </div>
      <div className={style.restaurant_body}>
        <div className={style.restaurant_menu}>
          <Menu menu={activeRestaurant.menu} />
        </div>
        <div className={style.restaurant_reviews}>
          <h4>Reviews</h4>
          <Reviews reviews={activeRestaurant.reviews} />
        </div>
      </div>
    </div>
  );
}
