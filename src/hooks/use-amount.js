import { useState } from 'react';

export default function useAmount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const increment = () => setCount(count + 1);

  return { count, decrement, increment };
}
