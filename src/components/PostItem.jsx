import { useEffect, useState } from 'react';

function PostItem() {
  // https://jsonplaceholder.typicode.com/posts/5
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(1);

  const fetchPostById = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPostById(postId);
  }, [postId]);

  return (
    <>
      {!post ? (
        <h1>Loading...</h1>
      ) : (
        <div className='mb-4'>
          <h1>Post No. {postId}</h1>
          <h1 className='font-bold'>TITLE : {post.title}</h1>
          <p>BODY : {post.body}</p>
        </div>
      )}
      <button className='btn-primary bg-red-400' onClick={() => setPostId((p) => p + 1)}>
        next post
      </button>
    </>
  );
}

export default PostItem;
