import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
    }
    return(

        <div className=' '>
            <h1 className='text-2xl mb-20'>Login Page</h1>
          <div className=''>
            <input className='mr-8 text-center placeholder-center'
            type='text' 
             value={username}
             onChange={(e)=> setUsername(e.target.value)}
            placeholder='username' />
            <input className='text-center placeholder-center'
             type='text' 
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
            placeholder='password' />
            <button className='ml-8'   onClick={handleSubmit}>Submit</button>
          </div>
         </div>   
    )
}

export default Login