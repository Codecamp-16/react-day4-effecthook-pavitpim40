// App.jsx
import { useState, useEffect } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  // useWatch => Tracking State ที่ชื่อ Email
  useEffect(() => {
    console.log('Start...validate');
    if (!email.includes('@')) {
      // not valid
      console.log('not valid');
      setError(true);
    } else {
      console.log('valid');
      setError(false);
    }
    console.log('End...validate');
  }, [email]);
  return (
    <main>
      <input
        className='border-green-500 border-2 rounded-md w-[300px] focus:outline-none'
        type='email'
        style={{ borderColor: error ? 'red' : 'green' }}
        placeholder='example@mail.com'
        value={email} // bidning Value with State
        onChange={(e) => setEmail(e.target.value)} // binding Event with SetState
      />
    </main>
  );
}
