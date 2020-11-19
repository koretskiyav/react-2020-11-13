import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

const style = {
  display: 'flex',
};

export default function Restaurant(props) {
  let totalRating = 0;

  if (props.restaurant.reviews) {
    props.restaurant.reviews.forEach(function (review) {
      totalRating += review.rating;
    });
    totalRating = (totalRating / props.restaurant.reviews.length).toFixed(1);
  }

  return (
    <div style={style}>
      <Menu menu={props.restaurant.menu} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '10px',
        }}
      >
        <Rate rating={totalRating} />
        <Reviews reviews={props.restaurant.reviews} />
      </div>
    </div>
  );
}
