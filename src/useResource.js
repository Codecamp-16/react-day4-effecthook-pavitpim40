import { useState, useEffect } from 'react';

const useResource = (type = 'users') => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return data;
};

export default useResource;
