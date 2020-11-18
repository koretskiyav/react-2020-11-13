import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant(props) {
  let num = 0;
  let sum = 0;
  props.restaurant.reviews.forEach((review) => {
    num++;
    sum += review.rating;
  });
  const average = (sum / num).toFixed(1);

  const style = {
    marginTop: '10px',
    color: 'grey',
  };

  return (
    <div>
      <div style={style}>
        Cредний рейтинг ресторана <Rate rating={average} />
      </div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
