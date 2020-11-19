import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

const Restaurant = ({ menu = [], reviews = [] }) => {
  return (
    <div className="restaurant">
      <Menu className="restaurant__menu" menu={menu} />
      <Reviews className="restaurant__reviews" reviews={reviews} />
    </div>
  );
};

export default Restaurant;
