import axios from 'axios'
import React, { useState } from 'react'
import { options } from '../utils/Contraint'
import { useDispatch, useSelector } from 'react-redux'
import { setmoviename, setsearchmovie } from './Searchslice'
import MovieList from './MovieList'
import { Link } from 'react-router-dom'

const Search = () => {
  const [searchmovie,setsearchmovies] = useState()
const dispatch = useDispatch()
const result = useSelector((state)=>state?.search?.searchmovie)
    const movname = useSelector((state)=>state?.search?.moviename)
    console.log(result)

  const submithandler = async(e)=>{
    e.preventDefault()
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchmovie}&include_adult=false&language=en-US&page=1`,options
    )
    const movie = res?.data?.results

    dispatch(setmoviename(searchmovie))
   dispatch(setsearchmovie(movie))

    
  }
  return (
    <div>
    <div className='w-full flex justify-center items-center space-x-6 px-4'>
    <div className=' absolute left-0 top-0'>
    <img className='w-56' src='https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.png'/>
</div>
<div className='flex justify-center items-center space-x-4 absolute top-6 right-8'>
    {/* <div className='text-xl text-white font-bold'><h1>{user.name}</h1></div> */}
    <button  className=' px-4 py-2 bg-red-700 text-lg rounded-md text-white'>Logout</button> 
   <Link to='/search'>  <button className='px-4 py-2 bg-red-700 text-lg rounded-md text-white'>Search movies</button></Link>
</div>
</div>
      <div className='flex justify-center pt-[10%] w-[100%]'>
      <form className='w-[50%] flex justify-center items-center' onSubmit={submithandler}>
        <input type="text" placeholder='Search' className='w-[40%] h-[40px] border-[1px] border-black px-3' value={searchmovie} onChange={(e)=>setsearchmovies(e.target.value)} />
        <button className='w-[20%] h-[40px] bg-red-800 text-white radius-md'>Search</button>
      </form>
      
      </div>
      <MovieList movie={result} title={movname} />
    </div>
  )
}

export default Search