import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async() => {
    
    const response = await fetch(url)
    const users = await response.json() 
    setUsers(users)

  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h2>fetch data</h2>
      <ul className="users">
        
        {users.map((user) => {
          const { id, login, avatar_url, html_url} = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <h4 href={html_url}>Profile</h4>
              </div>
          </li>)
        })}

      </ul>
    </>
  )
};

export default UseEffectFetchData;
