import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const sumRate = useMemo(
    () =>
      props.reviews
        .map((review) => review.rating)
        .reduce((r1, r2) => r1 + r2, 0),
    [props.reviews]
  );
  const averageRate = (sumRate / props.reviews.length).toFixed(1);

  return (
    <div className="restContainer">
      <Menu menu={props.menu} />
      <div className="flexItem">
        <Reviews reviews={props.reviews} />
        <div className="avgRate">
          <p>Average rating of restaurant:</p>
          <Rate rate={averageRate} />
        </div>
      </div>
    </div>
  );
}
