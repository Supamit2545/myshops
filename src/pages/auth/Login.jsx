import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [values , setValues]  = useState({
    username : '',
    password : ''
  })
  const navigate = useNavigate();
  
  const handleinput = (event) =>{
    setValues(prev =>({
      ...prev,
      [event.target.name]:[event.target.value]
    }))
  }
  const SubmitLogin = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:3001/login', values)
    .then(res =>{
      if(res.data.Login){
        navigate('/')
      }else{
        alert("Username or Password Invalid!")
      }
    })
    .catch(err => console.log(err))
  }
  axios.defaults.withCredentials = true;
  const TestLog = (event) =>{
    event.preventDefault()
    console.log(values)
    
  }
  return (
    <div className=''>
      <form onSubmit={SubmitLogin} action="">
        <div className='border-2 border-black w-2/4 mx-auto my-40 space-y-10 rounded-2xl shadow-2xl'>
          <div className='text-3xl font-bold font-mono text-center text-blue-500 underline'>Login</div>
          <div className='flex space-x-3 w-2/5 mx-auto'>
            <div className='space-y-10'>
              <div className='font-bold text-2xl'>Username:</div>
              <div className='font-bold text-2xl'>Password:</div>
            </div>
            <div className='space-y-10'>
              <div><input className='border-2 border-black rounded-lg py-1 px-5' type="text" name="username" id="username" required onChange={handleinput}/></div>
              <div><input className='border-2 border-black rounded-lg py-1 px-5' type="password" name="password" id="password" required onChange={handleinput}/></div>
            </div>
          </div>
          <div className='flex justify-center space-x-10 mx-auto'>
            <button className='hover:text-blue-500 hover:underline text-xl' ><Link to='/Register'>Register ?</Link></button>
            <button className='hover:text-blue-500 hover:underline text-xl '>Forgot password ?</button>
          </div>
          <div className='flex w-1/4 mx-auto justify-around pb-10'>
            <button className='border-2 bg-orange-500 font-bold text-white px-3 py-1 rounded-xl hover:bg-red-700'><Link to="/">Cancel</Link></button>
            <button className='border-2 bg-green-500 font-bold text-white px-3 py-1 rounded-xl hover:bg-green-700' onClick={SubmitLogin}>Login</button>
            <button className='border-2 bg-green-500 font-bold text-white px-3 py-1 rounded-xl hover:bg-green-700' onClick={TestLog}>Test Log</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login