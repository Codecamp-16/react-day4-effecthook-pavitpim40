// App.jsx
import { useState } from 'react';
import UserProfile from './components/UserProfile';

export default function App() {
  const [userId, setUserId] = useState(1);
  return (
    <main>
      <UserProfile userId={userId} />
      <button onClick={() => setUserId((p) => p + 1)}>next person</button>
    </main>
  );
}
