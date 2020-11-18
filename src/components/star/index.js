import React from 'react';
import propTypes from 'prop-types';
import './star.css';

const Star = ({ selected = false }) => {
  const _classList = `star ${selected ? 'star_selected' : ''}`;

  return <div className={_classList}></div>;
};

Star.propTypes = {
  selected: propTypes.bool,
};

export default Star;
