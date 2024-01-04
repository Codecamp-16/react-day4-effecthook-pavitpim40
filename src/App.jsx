// App.jsx
import { useEffect, useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const fetchUser = () => {
    // task-1 เขียนโค้ดสำหรับ Fetch user จาก https://jsonplaceholder.typicode.com/users/1
    // task-2 นำข้อมูลที่ได้จากการ Fetch มาอัพเดท user state
    // task-3 นำฟังก์ชัน fetchUser ไป binding กับ ปุ่ม
    // task-4 ลองดูผลลัพธ์ผ่าน browser + อธิบาย code ให้ตัวเองเข้าใจ
    fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <main>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </>
      ) : (
        <h1>Loading.....</h1>
      )}
      {/* <button onClick={fetchUser} className='btn-primary'>
        fetch user
      </button> */}
    </main>
  );
}
