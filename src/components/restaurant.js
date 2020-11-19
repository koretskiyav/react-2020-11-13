import React from 'react';

import Menu from './menu';
import Reviews from './Reviews/reviews';

export default function Restaurant(props) {
  const { review, menu } = props;
  return (
    <div>
      <Menu menu={menu} />
      {review.map((props) => {
        return (
          <div>
            <Reviews
              key={props.id}
              user={props.user}
              text={props.text}
              rating={props.rating}
            />
          </div>
        );
      })}
    </div>
  );
}
