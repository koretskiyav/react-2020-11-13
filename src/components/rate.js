import React from 'react';

export default function Rate(props) {
  return (
    <b>
      {(props.rating ^ 0) === props.rating
        ? props.rating
        : props.rating.toFixed(2)}
    </b>
  );
}
