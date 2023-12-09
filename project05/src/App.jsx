import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-700'>React router </h1>
    </>
  )
}

export default App
