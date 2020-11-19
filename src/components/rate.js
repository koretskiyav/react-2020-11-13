import React from 'react';

export default function Rate(props) {
  const { rating } = props;

  return (
    <div>
      <p>Rating: {rating}</p>
    </div>
  );
}
