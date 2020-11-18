import React from 'react';

export default function Rate({ rating }) {
  return rating ? <span>Rating: {rating}</span> : 'No rating';
}
