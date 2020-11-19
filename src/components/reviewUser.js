import React from 'react';

export default function ReviewUser(props) {
  return (
    <div>
      <h4>{props.review.user}</h4>
      <span>{props.review.text}</span>
    </div>
  );
}
