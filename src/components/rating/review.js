import React from 'react';
import Rating from './rating';
import style from './rating.module.css';

function Review(props) {
  const { user, text, rating } = props.review;

  return (
    <div className={style.review}>
      <h3>{user}</h3>
      <p className={style.reviewText}>{text}</p>
      <Rating rating={rating} />
    </div>
  );
}

export default Review;
