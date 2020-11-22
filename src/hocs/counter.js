import React from 'react';
import useAmount from '../hooks/use-amount';

const counter = (WrappedComponent) => (props) => {
  const amountProps = useAmount(props.initialAmount);
  return <WrappedComponent {...props} {...amountProps} />;
};

export default counter;
