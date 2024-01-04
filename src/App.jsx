// App.jsx
import { useState } from 'react';
import DogImage from './components/DogImage';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <main>
      {isShow ? <DogImage /> : null}
      <button onClick={() => setIsShow((cur) => !cur)}>toggle image</button>
    </main>
  );
}
