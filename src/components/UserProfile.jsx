// src/components/UserProfile
import { useState, useEffect } from 'react';
export default function UserProfile(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // fetch
    fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`, { signal })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));

    return () => {
      controller.abort('I got new props.userId');
    };
  }, [props.userId]);

  // write you code for fetchUser from Id
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
