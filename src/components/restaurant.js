import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

function Restaurant(props) {
  return (
    <div>
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
    </div>
  );
}

export default Restaurant;
