import React from 'react';

import Rating from './rating';
import Menu from './menu';

function Restaurant(props) {
  const { restaurant } = props;

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Rating reviews={restaurant.reviews} />
    </div>
  );
}

export default Restaurant;
