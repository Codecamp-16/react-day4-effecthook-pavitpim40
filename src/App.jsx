import React, { useState, useEffect } from 'react';
import PostItem from './components/PostItem';

function App() {
  const [isShow, setIsShow] = useState(false);
  const [postId, setPostId] = useState(1);

  return (
    <div>
      <button className='btn-primary' onClick={() => setIsShow((p) => !p)}>
        toggle post
      </button>
      <button className='btn-primary bg-red-400' onClick={() => setPostId((p) => p + 1)}>
        next post
      </button>
      {isShow ? <PostItem postId={postId} /> : null}
    </div>
  );
}

export default App;
