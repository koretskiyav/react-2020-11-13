import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant(props) {
  function getAverage(reviews) {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    return sum / reviews.length;
  }

  return (
    <div>
      <Menu menu={props.menu} />
      <Reviews reviews={props.reviews} />
      <Rate rating={getAverage(props.reviews)} />
    </div>
  );
}
