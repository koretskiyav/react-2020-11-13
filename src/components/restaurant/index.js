import React from 'react';
import Reviews from '../reviews';
import Menu from '../menu';
import Rate from '../rate';
import './style.css';

export default function Restaurant(props) {
  let averageRating =
    props.restaurant.reviews
      .map((review) => review.rating)
      .reduce((a, b) => a + b) / props.restaurant.reviews.length;

  return (
    <section>
      <Menu menu={props.restaurant.menu} />
      <div>
        <h3>Reviews:&nbsp;</h3>
        <Reviews reviews={props.restaurant.reviews} />
        <span className="average-text">
          Average rating:&nbsp;
          <Rate rating={averageRating} />
        </span>
      </div>
    </section>
  );
}
