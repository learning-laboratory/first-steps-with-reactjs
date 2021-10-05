import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('Hello World'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title!')
  const handlerClick = () => {
    if(text === 'random title!')
      setText('hello world!')
    else
      setText('random title!')
  } 
  return (
    <React.Fragment>
      <div className="container">
        <h2>{text}</h2>
      </div>
      <button className="btn" onClick={handlerClick}>change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics