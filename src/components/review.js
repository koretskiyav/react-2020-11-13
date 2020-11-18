import React from 'react';
import { Rate } from './rate';
import style from './review.module.css';

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div className={style.review}>
      <div>
        <h3>{user}</h3>
        <p>{text}</p>
      </div>
      <Rate rate={rating} />
    </div>
  );
};
