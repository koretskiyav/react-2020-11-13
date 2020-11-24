import React from 'react';
import useAmount from '../hooks/use-amount';

const counter = (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

export default counter;
