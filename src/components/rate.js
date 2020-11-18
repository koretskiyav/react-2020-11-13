import React from 'react';
import { Star } from '../icons/star';

export const Rate = ({ rate }) => {
  let stars = [1, 2, 3, 4, 5].map((i) =>
    i <= rate ? <Star key={i} isFilled /> : <Star key={i} />
  );

  return <span>{stars}</span>;
};
