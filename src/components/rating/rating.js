import React from 'react';
import StarEmpty from '../../icons/star-empty';
import StarYellow from '../../icons/star-yellow';
import style from './rating.module.css';

const MAX_RATING = 5;

function Rating(props) {
  const { rating, size } = props;
  const emptyStarsArr = [...Array(MAX_RATING).keys()];
  const emptyStars = emptyStarsArr.map((key) => (
    <StarEmpty key={key} size={size} />
  ));
  const yellowStarsArr = [...Array(Math.ceil(rating)).keys()];
  const yellowStars = yellowStarsArr.map((key, i) => (
    <StarYellow
      key={key}
      size={size}
      half={isHalfStar(rating, yellowStarsArr, i)}
    />
  ));

  return (
    <div style={{ height: size }} className={style.container}>
      <div className={style.emptyContainer}>{emptyStars}</div>
      <div className={style.starContainer}>{yellowStars}</div>
    </div>
  );
}

function isHalfStar(rating, arr, index) {
  return rating % 1 !== 0 && index === arr.length - 1;
}

export default Rating;
