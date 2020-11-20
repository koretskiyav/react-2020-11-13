import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      <p>
        {props.reviews.map((comment) => (
          <Rate key={comment.id} comment={comment} />
        ))}
      </p>
    </div>
  );
}
