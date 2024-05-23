import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function TopNav() {
  const navigate = useNavigate()
  const [name , setName] = useState('')
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(res =>{
      if(res.data.valid){
        setName(res.data.username)
        console.log('Logged in with : '+name)
      }else{
        console.log("Not Loggedin")
      }
    })
      .catch(err => console.log(err))
    })

    const handleLogout = async () => {
      try {
        const response = await axios.post('http://localhost:3001/logout');
        if (response.data.success) {
          window.location.reload()
        }
      } catch (error) {
        console.error('Failed to log out:', error);
      }
    };

    const testlog = () =>{
      console.log(name)
    }
  return (
    <div className="flex justify-between bg-whtie-400 py-3 shadow-2xl sticky">
        <div className="pl-5">
          <h1 className='py-3 text-3xl  text-pink-500 hover:cursor-pointer'><Link to='/'>PHAPPUSA Shops</Link></h1>
        </div>
        <div className="flex list-none gap-5 pr-10">
          <li className='text-blue-800 font-bold my-auto hover:cursor-pointer hover:text-blue-500'><Link to='/'>หน้าหลัก</Link></li>
          <li className='text-blue-800 font-bold my-auto hover:cursor-pointer hover:text-blue-500'>Listร้าน</li>
          <li className='text-blue-800 font-bold my-auto hover:cursor-pointer hover:text-blue-500'>Review</li>
          <li className='text-blue-800 font-bold my-auto hover:cursor-pointer hover:text-blue-500'>Contact</li>
          <div>
            {name ?(
              <div className='py-5 flex'>
                <p className='font-bold text-green-700 hover:cursor-pointer'>{name}</p>
                <div>
                  <button className='border-2 bg-red-500 px-3 rounded-2xl ml-5' onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ):(
              <div className='mt-2'>
                <button className='border-2 font-bold px-2 mr-5 py-1 rounded-lg text-xl hover:bg-orange-700 bg-orange-500'><Link to='/Register'>Register</Link></button>
                <button className='border-2 font-bold px-2 py-1 rounded-lg text-xl hover:bg-green-700 bg-green-500'><Link to='/Login'>Login</Link></button>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default TopNav