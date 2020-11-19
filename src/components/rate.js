import React from 'react';

export default function Rate(props) {
  const rating = Math.floor(props.rating * 100) / 100 || 0;

  return <span>Rating: {rating}</span>;
}
