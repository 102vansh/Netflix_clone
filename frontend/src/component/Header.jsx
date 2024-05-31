import React, { useState } from 'react'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import {  useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setuser } from './UserSlice'
import { settoggle } from './MovieSlice'
const Header = () => {
    const[login,setlogin] = useState(false)
    const[name,setname] = useState()
    const[email,setemail] = useState()
    const[password,setpassword] = useState()
    const navigate  = useNavigate()
    const dispatch  = useDispatch()
    const loginhandler = () =>{
        setlogin(!login)
    }

   
    const submithandler = async(e) =>{
        e.preventDefault()
        if(!login){
          
        try{
            
            const res = await axios.post('http://localhost:3000/api/v1/user/register',{name,email,password},{
                withCredentials:true,
            })
            console.log(res.data)
            toast.success(res.data.message)
           
          

        }catch(error){
console.log(error)
toast.error(error.response.data.message)
        }
      }else{
        try{
            
          const res = await axios.post('http://localhost:3000/api/v1/user/login',{email,password},{
              withCredentials:true,
          })
          console.log(res.data)
          dispatch(setuser(res.data.user))

          toast.success(res.data.message)
          setlogin(true)
          navigate('/browse')

      }catch(error){
console.log(error)
toast.error(error.response.data.message)
      }
      }
     
      
    }
  return (
    <div className='w-full flex justify-center items-center space-x-6 px-4'>
    <div className=' absolute left-0 top-0'>
    <img className='w-56' src='https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png'/>
</div>
<div className='flex justify-center items-center space-x-4 absolute top-6 right-8'>
    <div className='text-lg text-white font-bold'><h1></h1></div>
    {/* <button  className=' px-4 py-2 bg-red-700 text-lg rounded-md text-white'>Logout</button>
    <button className='px-4 py-2 bg-red-700 text-lg rounded-md text-white'>Search Movies</button> */}
</div>
  <form className='absolute bg-black h-[350px] m-auto flex flex-col space-y-7 p-9 py-2 top-[180px] opacity-90'>
      <h1 className='text-white font-bold text-2xl text-center'>{login?'Login':'SignUp'}</h1>
        <div className='flex flex-col space-y-4'>
        {!login &&  <input type='text' value={name} onChange={(e)=>setname(e.target.value)} className='p-2 bg-slate-600 rounded-sm text-white' placeholder='Enter Your Name'></input>}
       
          <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} className='p-2  bg-slate-600 rounded-sm text-white' placeholder='Enter Your Email'></input>
          <input type='text'value={password} onChange={(e)=>setpassword(e.target.value)} className='p-2  bg-slate-600 round
          ed-sm text-white' placeholder='Enter Your Password'></input>
          <button className='p-3 text-white bg-red-700 font-bold' onClick={submithandler}>{login?'Login':'SignUp'}</button>
          <p className='text-white font-semibold'>{login?'New to Netflix':'Already have an Account' } ?<span className=' ml-2 text-blue-600 cursor-pointer hover:underline' onClick={loginhandler}>{login?'SignUp':'Login'}</span></p>
        </div>

      </form>
      <Toaster/>

    </div>
  )
}

export default Header