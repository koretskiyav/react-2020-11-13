import React from 'react';
import './star.css';

const Star = ({ fullness = 0 }) => {
  const _starSelectedStyle = {
    width: `${fullness * 100}%`,
  };

  return (
    <div className="star">
      <div className="star_selected" style={_starSelectedStyle}></div>
    </div>
  );
};

Star.propTypes = {
  fullness: (props, propName, componentName) => {
    const prop = props[propName];

    if (typeof prop !== 'number' || prop > 1 || prop < 0) {
      return new Error(
        `Проп \`${propName}\` компонента \`${componentName}\` имеет неправильное значение`
      );
    }
  },
};

export default Star;
