import React from 'react';

import Rate from './../rate';
import style from './reviews.module.css';

export default function Reviews(props) {
  return (
    <div className={style.container}>
      <p>{props.user}</p>
      <p>{props.text}</p>
      <Rate rate={props.rating} />
    </div>
  );
}
