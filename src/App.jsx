import { useEffect } from 'react';
// App.jsx
export default function App() {
  useEffect(() => {
    alert('After render');
  }, []);

  alert('Before render');
  // สิ่งที่ FC Return == สิ่งที่ Render
  return <main>Hello, React</main>;
}
