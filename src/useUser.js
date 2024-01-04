// custom hook
import React from 'react';

const useUser = (userId) => {
  // ReactHook Group
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    console.log('Effect in custom hook');
    setTimeout(() => {
      fetchUser();
    }, 1000);
  }, [userId]);

  // FN and Varaible
  const fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  return { user: user };
  // return [user];
};

export default useUser;
