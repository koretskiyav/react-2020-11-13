import React from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
import Rate from '../rate';
import './restaurant.css';

const Restaurant = ({ menu = [], reviews = [] }) => {
  const averageRating =
    reviews.reduce((res, review) => review.rating + res, 0) / reviews.length;

  return (
    <div className="restaurant">
      <Rate rating={averageRating} />
      <Menu className="restaurant__menu" menu={menu} />
      <Reviews className="restaurant__reviews" reviews={reviews} />
    </div>
  );
};

export default Restaurant;
