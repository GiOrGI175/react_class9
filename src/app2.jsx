import React, { useEffect, useState } from 'react';

const App2 = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('network response was not ok');
  //         }

  //         return response.json();
  //       })
  //       .then((data) => {
  //         setUsers(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error('error data', error);
  //         setLoading(false);
  //       });
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('network probmlem');
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('err', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    // <div>
    //   <h1>user List</h1>
    //   {users.length > 0 ? (
    //     <ul>
    //       {users.map((user) => {
    //         return <li key={user.id}>{user.name}</li>;
    //       })}
    //     </ul>
    //   ) : (
    //     <p>names not found</p>
    //   )}
    // </div>
    <div>
      <h1>user List</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default App2;
