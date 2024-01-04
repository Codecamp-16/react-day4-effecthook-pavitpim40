import React from 'react';
import useCounter from './useConter';

function Counter() {
  const { count, increase, decrease, reset } = useCounter(0);

  // Render
  return (
    <main>
      <h1>count : {count}</h1>
      <div>
        <button onClick={() => increase()} className='btn-primary mx-2'>
          +
        </button>
        <button onClick={() => reset()} className='btn-primary mx-2'>
          reset
        </button>
        <button onClick={() => decrease()} className='btn-primary mx-2'>
          -
        </button>
      </div>
    </main>
  );
}

export default Counter;
