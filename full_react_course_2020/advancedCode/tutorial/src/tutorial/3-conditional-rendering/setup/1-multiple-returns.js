import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarsone'

const MultipleReturns = () => {

  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState('default user')
  
  useEffect(()=>{
    fetch(url)
      .then((resp) => {
        if(resp.status >= 200 && resp.status <= 299)
          return resp.json()
        else{
          setLoading(false)
          setError(true)
          throw new Error(resp.statusText)
        }  
      })
      .then((user) => { 
        const {login} = user
        setUser(login)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if(isLoading){
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    )
  }

  if(isError){
    return (
      <div>
        <h2>Error ...</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  )
}

export default MultipleReturns
