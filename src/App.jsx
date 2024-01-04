import React, { useState, useEffect } from 'react';

function App() {
  // state
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   fetchData();
    // }, 3000);

    fetchData();
  }, []);

  // handle Function
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {})
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setAllPosts(data);
      })
      .catch((err) => {
        console.log(err);
        setAllPosts([]);
      });
  };

  const postRender = allPosts.map((post) => (
    <div key={post.id} className='mb-4'>
      <h1 className='font-bold'>TITLE : {post.title}</h1>
      <p>BODY : {post.body}</p>
    </div>
  ));

  return <div>{allPosts.length > 0 ? postRender : <h1>Loading...</h1>}</div>;
}

export default App;
