import { useState } from 'react';
const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  const reset = () => setCount(0);
  return { count, increase, decrease, reset };
};

export default useCounter;
