import React, { useState } from 'react';
import axios from 'axios';
import './app.css';

const App = () => {
  const [users, setUsers] = useState([
    {
      userId: 1,
      id: 0,
      title: 'Я старая данность',
      body: 'я старое body',
    },
  ]);

  const objects = axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((array) => setUsers(array.data));
  // };
  return (
    <div className='app'>
      {users.map((user) => {
        return (
          <div>
            <h3 className='user-id'>Уникальное ID {user.id}</h3>
            <h5 className='user-title'>Заголовок {user.title}</h5>
            <p className='user-body'>Описание проекта {user.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
