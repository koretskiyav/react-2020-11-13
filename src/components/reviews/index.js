import React from 'react';
import Rate from '../rate';
import './style.css';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <article key={review.id}>
          <h4>{review.user}</h4>
          <div className="rating">
            <span>Rating: </span>
            <Rate rating={review.rating} />
          </div>
          <p>{review.text}</p>
        </article>
      ))}
    </div>
  );
}
