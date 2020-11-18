import React from 'react';

import Star from '../../icons/star';

import './index.css';

export default function Rate({ value = 5 } = {}) {
  if (value < 1 || value > 5) return null;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} disabled={i >= value} />);
  }

  return <div className="rate">{stars}</div>;
}
