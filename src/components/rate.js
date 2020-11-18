import React from 'react';
import Star from '../icons/star';

export default function Rate(props) {
  const starRate = parseInt(props.rate);
  return (
    <div className="star">
      {[...Array(starRate)].map((e, i) => (
        <Star key={i} />
      ))}
      <span>({props.rate})</span>
    </div>
  );
}
