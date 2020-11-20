import React from 'react';

function Rate(props) {
  return (
    <div>
      <p>Рейтинг: {props.comment.rating}</p>
      <p>{props.comment.user}:</p>
      <p>"{props.comment.text}"</p>
    </div>
  );
}

export default Rate;
