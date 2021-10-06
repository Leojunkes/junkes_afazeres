import { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-html-link-for-pages */
export default function Page2() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem('users'));
    const tasks =
      localStorage.getItem('users') !== null ? localStorageTasks : [];
    console.log(tasks);

    setUsers([...tasks]);
  }, []);

  return (
    <>
      <label>ola pagina 2</label>
      <a href="/">
        <button>pagina1</button>
      </a>
      <ul>
        {users.map((u, key) => (
          <li key={key}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}
