import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  const style = {
    paddingTop: '10px',
    name: {
      fontSize: '1.2rem',
      color: '#7cb9e5',
    },
    text: {
      color: 'grey',
    },
  };
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id} style={style}>
          <div style={style.name}>{review.user}</div>
          <div style={style.text}>{review.text}</div>
          <div>
            Рейтинг <Rate rating={review.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}
