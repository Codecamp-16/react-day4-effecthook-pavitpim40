import React, { useState, useEffect } from 'react';
import PostItem from './components/PostItem';

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button className='btn-primary' onClick={() => setIsShow((p) => !p)}>
        toggle post
      </button>
      {isShow ? <PostItem /> : null}
    </div>
  );
}

export default App;
