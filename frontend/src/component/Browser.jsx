import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from './Store'
import { Link, useNavigate } from 'react-router-dom'
import MainContainer from './MainContainer'
import Moviecontainer from './Moviecontainer'
import axios from 'axios'
import { options } from '../utils/Contraint'
import { getnowplayingmovie, getpopularmovie, gettopratedmovie, getupcommingmovie, settoggle } from './MovieSlice'
import { setuser } from './UserSlice'

import toast,{Toaster} from 'react-hot-toast'
import Search from './Search'



const Browser = () => {
  // const[toggle,settoggle] = useState(false)
   const user = useSelector((store)=>store.app.user)
   const toggle = useSelector((store)=>store.movie.toggle)
   
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  const nowplaying = async () => {
    
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing',options);
      if (res.data && res.data.results) {
        console.log(res.data);
        dispatch(getnowplayingmovie(res.data.results));
      } else {
        console.log('Response data or results are null or undefined');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const popularmovie = async () => {
    
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular', options);
      if (res.data && res.data.results) {
        console.log(res);
        dispatch(getpopularmovie(res.data.results));
      } else {
        console.log('Response data or results are null or undefined');
      }
    } catch (error) {
      console.log(error);
    }
  };


  const topratedmovie = async () => {
    
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options);
      if (res.data && res.data.results) {
        console.log(res);
        dispatch(gettopratedmovie(res.data.results));
      } else {
        console.log('Response data or results are null or undefined');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const upcommingmovie = async () => {
    
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options);
      if (res.data && res.data.results) {
        console.log(res);
        dispatch(getupcommingmovie(res.data.results));
      } else {
        console.log('Response data or results are null or undefined');
      }
    } catch (error) {
      console.log(error);
    }
  };









  const logouthandler = async()=>{
    try{
const res = await axios.get('http://localhost:3000/api/v1/user/logout',{withCredentials:true})
console.log(res)
toast.success(res.data.message)
setuser(null)
navigate('/')
    }catch(error){
console.log(error.response.data.message)
toast.error(error.response.data.message)
    }
  }



  

  useEffect(()=>{
    
   nowplaying()
   popularmovie()
   topratedmovie()
   upcommingmovie()
   })

   const togglehandler = () =>{
    dispatch(settoggle())
    alert('hello')
    navigate('/search')
      }
  return (
    <div>
      <div className='w-full flex justify-center items-center space-x-6 px-4'>
    <div className=' absolute left-0 top-0'>
    <img className='w-56' src='https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png'/>
</div>
<div className='flex justify-center items-center space-x-4 absolute top-6 right-8'>
    {/* <div className='text-xl text-white font-bold'><h1>{user.name}</h1></div> */}
    <button onClick={logouthandler} className=' px-4 py-2 bg-red-700 text-lg rounded-md text-white'>Logout</button> 
   <Link to='/search'>  <button onClick={togglehandler} className='px-4 py-2 bg-red-700 text-lg rounded-md text-white'>{toggle ? 'Home' : 'Search Movies'}</button></Link>
</div>
</div>
{toggle? <Search/>:(
  <>
  <MainContainer/>
<Moviecontainer/>
  </>
)}
<div>

</div>
<Toaster/>
    </div>
  )
}

export default Browser