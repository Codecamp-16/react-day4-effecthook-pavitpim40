// src/components/DogImage.jsx
import { useState, useEffect } from 'react';

const src =
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function DogImage() {
  const [feedCount, setFeedCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (feedCount == 0) console.log('จุ๊มมม หิว');
    else if (feedCount === 5) console.log('Thank my lord');
    else if (feedCount == 10) {
      console.log('ผมอิ่มแล้วฮะ');
      setIsShow(false);
    } else if (feedCount > 0 && feedCount <= 10) console.log('Thank');
  }, [feedCount]); // didmount, didUpdate (feedCount)
  return (
    <div>
      <img src={src} />
      {isShow && <button onClick={() => setFeedCount((c) => c + 1)}>Feed Me : {feedCount}</button>}
    </div>
  );
}
