import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

class ReviewCollection extends Array {
  sum(key) {
    return this.reduce((a, b) => a + b[key], 0);
  }

  average(key) {
    return this.sum(key) / this.length;
  }
}

export default function Restaurant(props) {
  const menu = props.menu;
  const reviews = new ReviewCollection(...props.reviews);

  return (
    <div>
      <p>
        Restaurant average rating: <Rate rating={reviews.average('rating')} />{' '}
      </p>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
