import React from 'react';
import propTypes from 'prop-types';

import Star from './star';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} />
    ))}
  </div>
);

Rate.propTypes = {
  value: propTypes.number.isRequired,
};

export default Rate;
