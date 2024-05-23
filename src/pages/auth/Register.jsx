import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [users , setUsers] = useState([])
    const [email , setEmail] = useState('')
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [conpassword , setConpassword] = useState('')
    const [role , setRole] = useState('User')

    const SubmitRegister = (event) =>{
        if(password != conpassword){
            alert("Password not Match!!")
            event.preventDefault()
        }else{
            axios.post('http://localhost:3001/register',{
                email: email,
                username: username,
                password: password,
                role: role,
                }).then(()=>{
                    setUsers([
                        ...users,{
                            email: email,
                            username: username,
                            password: password,
                            role: role,
                        }
                    ])
                })
            alert("Registerd !")
        }
    }
    const TestLog= () =>{
        console.log(password)
        console.log(conpassword)
        console.log({email})
        console.log({username})
        console.log({password})
        console.log({role})
        if(password == conpassword){
            console.log("Password Match")
        }else{
            console.log("password Not Match")
        }
    }

  return (
    <div className=''>
        <form action="">
            <div className='border-2 border-black w-2/4 mx-auto my-40 space-y-10 rounded-2xl shadow-2xl'>
                <div className='text-3xl font-bold font-mono text-center text-black underline my-5'>Register</div>
                <div className='flex space-x-3 w-2/5 mx-auto'>
                <div className='space-y-10'>
                    <div className='font-bold text-2xl'>Email:</div>
                    <div className='font-bold text-2xl'>Username:</div>
                    <div className='font-bold text-2xl'>Password:</div>
                    <div className='font-bold text-2xl'>Confirm Password:</div>
                    <div className='font-bold text-2xl'>Your Role:</div>
                    
                </div>
                <div className='space-y-10'>
                    <div><input className='border-2 border-black rounded-lg py-1 px-5' type="email" name="email" id="email" required onChange={(event)=>{
                    setEmail(event.target.value)}}/></div>
                    <div><input className='border-2 border-black rounded-lg py-1 px-5' type="text" name="username" id="username" required onChange={(event)=>{
                    setUsername(event.target.value)}}/></div>
                    <div><input className='border-2 border-black rounded-lg py-1 px-5' type="password" name="password" id="password" required onChange={(event)=>{
                    setPassword(event.target.value)}}/></div>
                    <div><input className='border-2 border-black rounded-lg py-2 px-5' type="password" name="conpassword" id="confirm" required onChange={(event)=>{
                    setConpassword(event.target.value)}}/></div>
                    <div><input className='border-2 border-black rounded-lg py-2 bg-gray-400 font-bold text-center hover:cursor-not-allowed' type="text" name="role" id="role" value={'User'} readOnly/></div>
                </div>
                </div>
                <div className='text-center text-blue-500 text-xl hover:cursor-pointer hover:underline'><Link to='/Login'>Already Have Accout ?</Link></div>
                <div className='flex w-1/4 mx-auto justify-around pb-5'>
                    <button className='border-2 bg-orange-500 font-bold px-4 py-2 rounded-xl hover:bg-red-700'><Link to="/">Cancel</Link></button>
                    <button className='border-2 bg-green-500 font-bold px-4 py-2 rounded-xl hover:bg-green-700' onClick={SubmitRegister}>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register