import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  // จังหวะ render => return ตัว virtual dom(JSX)
  // virtual dom == JSX == JS Object
  return (
    <>
      <h1>Hello world! {count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  );
}

export default App;
