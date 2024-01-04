import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className='text-center'>
      <p>count :{count} </p>
      <button className='btn-primary mx-1' onClick={() => setCount((c) => c - 1)}>
        -
      </button>
      <button className='btn-primary mx-1' onClick={() => setCount(0)}>
        reset
      </button>
      <button className='btn-primary mx-1' onClick={() => setCount((c) => c + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
