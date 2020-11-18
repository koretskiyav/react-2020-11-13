import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const calculateAverageRating = () => {
    let ratingSum = 0;

    props.reviews.forEach((review) => {
      ratingSum += review.rating;
    });

    return ratingSum / props.reviews.length;
  };

  return (
    <div>
      <h4>Menu:</h4>
      <Menu menu={props.menu} />
      <h4>Reviews:</h4>
      <Reviews reviews={props.reviews} />
      <h4>Average Rating:</h4>
      <Rate rating={calculateAverageRating()} />
    </div>
  );
}
