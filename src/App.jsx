import React from 'react';
import Counter from './Counter';

// Custom Hook
// 1.แยก Logic ออกจาก UI
// 2.Resuable (Logic, UI)

function App() {
  // Render
  return (
    <main>
      <Counter />
      <Counter />
      <Counter />
    </main>
  );
}

export default App;
