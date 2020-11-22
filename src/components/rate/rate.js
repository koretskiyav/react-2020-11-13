import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} />
    ))}
  </div>
);

//Rate.defaultProps = {
//value: 0,
//};

Rate.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rate;
