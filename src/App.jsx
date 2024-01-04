import React, { useState } from 'react';

function App() {
  // state
  const [allPosts, setAllPosts] = useState([]);

  // handle Function
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setAllPosts(data);
      })
      .catch((err) => console.log(err));
  };

  const postRender = allPosts.map((post) => (
    <div key={post.id} className='mb-4'>
      <h1 className='font-bold'>TITLE : {post.title}</h1>
      <p>BODY : {post.body}</p>
    </div>
  ));

  return (
    <div>
      <button
        className='p-2 border-2 border-sky-800 rounded-md hover:bg-sky-800 hover:text-white shadow-lg'
        onClick={fetchData}
      >
        fetch Data
      </button>
      {allPosts.length > 0 ? postRender : null}
    </div>
  );
}

export default App;
