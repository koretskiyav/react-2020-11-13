import React from 'react';
import { number } from 'prop-types';

import Star from './star';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} />
    ))}
  </div>
);

Rate.propTypes = {
  value: number.isRequired,
};

export default Rate;
