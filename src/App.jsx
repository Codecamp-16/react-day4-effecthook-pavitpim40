import React from 'react';

// Custom Hook
// 1.แยก Logic ออกจาก UI
// 2.Resuable (Logic, UI)

function App() {
  // ReactHook Group
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetchUser();
  }, []);

  // FN and Varaible
  const fetchUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  // Render
  return (
    <main>
      {user ? (
        <div>
          <h1>name:{user.name}</h1>
          <h2>email:{user.email}</h2>
        </div>
      ) : null}
    </main>
  );
}

export default App;
