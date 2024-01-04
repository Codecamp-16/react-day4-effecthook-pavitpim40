import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow((p) => !p);
  };
  return (
    <>
      <button className='btn-reset' onClick={handleToggle}>
        toggle show
      </button>
      {isShow ? <Counter /> : null}
    </>
  );
}

export default App;
