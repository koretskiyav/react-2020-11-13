import React from 'react';

export default function Rate(props) {
  return <span>{props.rating.toFixed(1)}</span>;
}
