
//-----Counter App in React ----- //

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  

  const addValue = () =>{
    if (counter < 20) {
      console.log("added",Math.random());
    counter = counter + 1;
    setCount(counter)

    }
    
  }
  const removeValue = () =>{
    if(counter > 0){

      console.log("removed",Math.random());
      counter = counter - 1;
      setCount(counter)
    }
    
  }
  return (
    <>
      <h1> chai aur react</h1>
      <h2>Counter Value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
       onClick={removeValue}
      >Remove Value {counter} </button>

    </>
  )
}

export default App
