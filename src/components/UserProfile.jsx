import { useEffect, useState } from 'react';

// src/components/UserProfile
export default function UserProfile() {
  // const user = null; // jsVariable
  const [user, setUser] = useState(null);

  useEffect(() => {
    // // declare
    // const fetchUser = () => {
    //   fetch('https://jsonplaceholder.typicode.com/users/1')
    //     .then((res) => res.json())
    //     .then((data) => setUser(data))
    //     .catch((err) => console.log(err));
    // };
    // // Execute
    // fetchUser();

    // IIFE : Intermidiatly Invokation Function Expression
    (() => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.log(err));
    })();
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
