import React from 'react';
import Star from '../icons/star';

export default function Rate(props) {
  const rating = [];
  let i = 1;
  while (i <= props.rating) {
    rating.push(<Star />);
    i++;
  }
  return (
    <div>
      <p>Rating: {rating}</p>
    </div>
  );
}
