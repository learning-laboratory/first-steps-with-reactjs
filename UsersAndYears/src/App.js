import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const AddUserHandler = (username, age) => {
    setUsers(prevUsers => {
      const updateUsers = [...prevUsers];
      updateUsers.unshift({ username: username, age: age, id: Math.random().toString() });
      return updateUsers;
    });
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      {users.length > 0 ?
        <UsersList users={users} />
        :
        (<p>Empty</p>)
      }
    </div>
  );
}

export default App;
