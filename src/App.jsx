import React from 'react';
import useUser from './useUser';

// Custom Hook
// 1.แยก Logic ออกจาก UI
// 2.Resuable (Logic, UI)

function App() {
  // ตัว App กำลัง subscribe ค่า user จาก useUser
  const { user } = useUser();
  console.log(user);
  // Render
  return (
    <main>
      {user ? (
        <div>
          <h1>name:{user.name}</h1>
          <h2>email:{user.email}</h2>
        </div>
      ) : (
        'Loading....'
      )}
    </main>
  );
}

export default App;
