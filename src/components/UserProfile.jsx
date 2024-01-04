import { useEffect, useState } from 'react';

// src/components/UserProfile
export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    // AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    // declare
    const fetchUser = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetch Success');
          setUser(data);
        })
        .catch(console.log);
    };
    // Execute + Delay

    fetchUser(userId);

    // CleanUp
    return () => {
      controller.abort('I got new userId');
    };
  }, [userId]);

  // write you code for fetchUser
  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
      <button className='btn-reset' onClick={() => setUserId((p) => p + 1)}>
        next person
      </button>
    </div>
  );
}

/* 
// Solution
  useEffect(() => {
    // // declare
    const fetchUser = () => {
      console.log('FETCH');
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.log(err));
    };
    // Execute + Delay
    const timeOutId = setTimeout(() => {
      fetchUser();
    }, 10 * 1000);

    // CleanUp
    return () => {
      clearTimeout(timeOutId);
      console.log('CleanUp');
    };
  }, []);

*/
