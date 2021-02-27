import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
         This is the home page rendered by SSR.
      </div>
      <button onClick = {() => console.log('Hi there')} >Click me!</button>
    </div>
  )
}

export default Home
