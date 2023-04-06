import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  
  const [text, setText] = useState('Music')
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  const [isError, setError] = useState(false)

  return (
    <>
      {/* <h2>{firstValue}</h2> */}
      {/* <h1>{secondValue}</h1> */}
      <h1>{text || 'John Doe' }</h1>
      <button className="btn" onClick={() => setError(!isError)}>Toggle Error</button>
      <h2>{!text && 'Hello Word'}</h2>
      <h2>{text && 'Hello Word, Too'}</h2>
      <h2>{isError && 'Error page'}</h2>
      <h2>{isError ? 'Error page' :  "No error"}</h2>
    </>
  )
}

export default ShortCircuit
