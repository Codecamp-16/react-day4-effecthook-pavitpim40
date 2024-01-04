import { useEffect, useState } from 'react';

// src/components/UserProfile
export default function UserProfile() {
  // const user = null; // jsVariable
  const [user, setUser] = useState(null);

  useEffect(() => {
    // AbortController
    const controller = new AbortController();
    const signal = controller.signal;

    // declare
    const fetchUser = () => {
      fetch('https://jsonplaceholder.typicode.com/users/1', { signal })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetch Success');
          setUser(data);
        })
        .catch(console.log);
    };
    // Execute + Delay

    fetchUser();

    // CleanUp
    return () => {
      controller.abort("I'm Dead");
    };
  }, []);

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
