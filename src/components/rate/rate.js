import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';

const Rate = ({ value, onChange = (f) => f }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} onClick={() => onChange(i + 1)} />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rate;
