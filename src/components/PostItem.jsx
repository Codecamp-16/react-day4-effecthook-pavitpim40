import { useEffect, useState } from 'react';

function PostItem() {
  // https://jsonplaceholder.typicode.com/posts/5
  const [post, setPost] = useState(null);

  const fetchPostById = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/5`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPostById();
  }, []);

  return (
    <>
      {!post ? (
        <h1>Loading...</h1>
      ) : (
        <div className='mb-4'>
          <h1 className='font-bold'>TITLE : {post.title}</h1>
          <p>BODY : {post.body}</p>
        </div>
      )}
    </>
  );
}

export default PostItem;
