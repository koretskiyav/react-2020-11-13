import React from 'react';
import useAmount from '../hooks/use-amount';

const counter = (WrappedComponent) => ({ initialCount, ...props }) => {
  const amountProps = useAmount(initialCount);
  return <WrappedComponent {...props} {...amountProps} />;
};

export default counter;
