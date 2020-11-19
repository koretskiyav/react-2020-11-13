import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rate(props) {
  function createRateView(rating) {
    let ratingIcons = [];
    let maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
      if (rating > i) {
        ratingIcons.push(<FontAwesomeIcon icon={faStar} color="yellow" />);
      } else {
        ratingIcons.push(<FontAwesomeIcon icon={faStar} color="grey" />);
      }
    }
    return ratingIcons;
  }

  return (
    <div>
      <p>Rate: {Math.round(props.rating)}</p>
      {createRateView(props.rating)}
    </div>
  );
}
