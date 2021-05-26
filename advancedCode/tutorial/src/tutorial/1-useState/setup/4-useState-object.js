import React, { useState } from 'react';

const UseStateObject = () => {
  
  let data = {
    name:'peter', age:24, message:'random message',
  }
  const [person, setPerson] = useState(data)

  const changeMessage = () => {
    // setPerson({...person, message:"hello world "})
    setMessage("hello world ")
  }

  const [name, setName] = useState('mario')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <buttom className="btn" onClick={changeMessage}>change message</buttom>
    </>
  )
};

export default UseStateObject;
