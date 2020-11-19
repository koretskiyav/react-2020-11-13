import React from 'react';
import Review from './review';

function Reviews(props) {
  const { reviews } = props;
  const list = reviews.map((review) => (
    <Review review={review} key={review.id} />
  ));

  return (
    <div>
      <h3>Reviews:</h3>
      {list}
    </div>
  );
}

export default Reviews;
