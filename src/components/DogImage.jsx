import { useEffect } from 'react';

// src/components/DogImage.jsx
const src =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function DogImage() {
  useEffect(() => {
    // ทำตอน didMount/didUpdate
    console.log('Hi my name is จุ๊มเหม่ง');

    return () => {
      // ทำตอน will unmount ก่อนฉัน(component)จะหายไปจาก browser
      console.log('Goodbye จุ๊มเหม่ง');
    };
  }, []);

  return <img src={src} />;
}
