import React from 'react';

import Reviews from './reviews';
import Rate from './rate';

function Index(props) {
  const { reviews } = props;

  return (
    <div>
      <Rate reviews={reviews} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default Index;
