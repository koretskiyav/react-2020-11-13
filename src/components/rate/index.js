import React from 'react';
import Star from '../star';
import './rate.css';

const calculateStarFullness = ({ starIndex, wholeStar, rest, rating }) =>
  starIndex < wholeStar ? 1 : starIndex + rest === rating ? rest : 0;

const Rate = ({ rating = 0 }) => {
  const wholeStar = Math.floor(rating);
  const rest = rating - wholeStar;

  return (
    <div className="rate">
      <div className="rate__stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            fullness={calculateStarFullness({
              starIndex: i,
              wholeStar,
              rest,
              rating,
            })}
          />
        ))}
      </div>
      <div className="rate__info">Rating {rating} of 5</div>
    </div>
  );
};

Rate.propTypes = {
  rating: (props, propName, componentName) => {
    const prop = props[propName];

    if (typeof prop !== 'number' || prop > 5 || prop < 0) {
      return new Error(
        `Проп \`${propName}\` компонента \`${componentName}\` имеет неправильное значение`
      );
    }
  },
};

export default Rate;
