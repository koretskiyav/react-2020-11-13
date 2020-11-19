import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <h4>Reviews</h4>
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
