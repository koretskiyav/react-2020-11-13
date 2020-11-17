import React from 'react';
import useAmount from '../hooks/use-amount';

const counter = (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

export default counter;

// export default (WrappedComponent) => {
//   const HocComponent = (props) => {
//     const { count, decrement, increment } = useAmount(5);

//     return (
//       <WrappedComponent
//         {...props}
//         count={count}
//         decrement={decrement}
//         increment={increment}
//       />
//     );
//   };

//   return HocComponent;
// };
