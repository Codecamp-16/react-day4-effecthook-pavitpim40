import { useState, useEffect } from 'react';

function Counter() {
  // state
  const [count, setCount] = useState(1);
  const [userInput, setUserInput] = useState('');

  // effect : useEffect(FN,[dependencies])

  // useEffect(() => console.log('## run every render/rerender'));
  // useEffect(() => {
  //   // body
  //   console.log('I am born (didmount == after first render)');
  //   // return
  //   return () => {
  //     console.log('my last word');
  //   };
  // }, []);
  useEffect(() => {
    // Body
    console.log('## in useEffect in Count (did mount)', count);
    // Return
    return () => {
      console.log('### cleanup', count);
    };
  }, [count]);
  // useEffect(() => console.log('## in useEffect (input)', userInput), [userInput]);
  // useEffect(() => console.log('run when count and  userInput change'), [count, userInput]);

  // handle fn ต่าง
  console.log('# in FC (render/rerender)', count);
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
      <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
    </div>
  );
}

export default Counter;
