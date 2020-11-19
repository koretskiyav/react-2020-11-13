import React, { useMemo } from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';
import style from './restaurant.module.css';

export default function Restaurant(props) {
  const avgRating = useMemo(() => {
    const sum = props.restaurant.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return sum / props.restaurant.reviews.length || 0;
  }, [props.restaurant.reviews]);

  return (
    <>
      <div>
        <p>
          <b>
            {props.restaurant.name} <Rate rating={avgRating} />
          </b>
        </p>
      </div>
      <div className={style.restaurantContainer}>
        <Menu menu={props.restaurant.menu} />
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </>
  );
}
