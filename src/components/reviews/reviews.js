import React from 'react';
import Rate from '../rate';
import style from './reviews.module.css';

export default function Review(props) {
  const { reviews } = props;

  return (
    <div>
      {reviews.map((review) => (
        <div className={style.review} key={review.id}>
          <div className={style.review_info}>
            <div className={style.review_user}>{review.user}</div>
            <div className={style.review_text}>{review.text}</div>
          </div>
          <div className={style.review_rating}>
            <Rate rating={review.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
