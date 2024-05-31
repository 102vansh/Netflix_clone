import React from 'react'
import { useDispatch } from 'react-redux'
import { setid, setopen } from './MovieSlice'

const MovieCard = ({posterpath,movieid}) => {
  const dispatch = useDispatch()
  const handleopen = ()=>{
    dispatch(setopen(true))
    dispatch(setid(movieid))
  }
  return (
    <div className='w-52  pr-2' onClick={handleopen}>
        <img  className=' w-[500px] h-[300px]' src={`https://image.tmdb.org/t/p/w500/${posterpath}`}></img>
    </div>
  )
}

export default MovieCard