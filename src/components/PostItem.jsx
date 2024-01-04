import { useEffect, useState } from 'react';

function PostItem(props) {
  // https://jsonplaceholder.typicode.com/posts/5
  const [post, setPost] = useState(null);

  const fetchPostById = (id) => {
    console.log('START FETCH');

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPostById(props.postId);
  }, [props.postId]);

  return (
    <>
      {!post ? (
        <h1>Loading...</h1>
      ) : (
        <div className='mb-4'>
          <h1>Post No. {props.postId}</h1>
          <h1 className='font-bold'>TITLE : {post.title}</h1>
          <p>BODY : {post.body}</p>
        </div>
      )}
    </>
  );
}

export default PostItem;
