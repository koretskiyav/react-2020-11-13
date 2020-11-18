import React from 'react';

export default function Rate(props) {
  return (
    <div>
      <div>Rating: {props.rating.toFixed(1)}</div>
    </div>
  );
}
