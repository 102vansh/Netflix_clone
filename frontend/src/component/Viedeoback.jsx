import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../utils/Contraint'
import { useDispatch, useSelector } from 'react-redux'
import { settrailer } from './MovieSlice'

const Viedeoback = ({movieid}) => {
  const dispatch = useDispatch()
  const trailers = useSelector((store)=>store.movie.trailer)
  const movieids = async(movieid)=>{
try{
const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieid}/videos`,options)
console.log(res)
const trailer = res?.data?.results?.filter((item)=>{
  return item.type == 'Trailer'

})
dispatch(settrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]))

}catch(error){
console.log(error)
}
  }
  useEffect(()=>{
    movieids(movieid)
  })
 
  return (
    <div className='w-screen '>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailers?.key}?i=BKOPsOP3SHBIf6HF&autoplay=1&mute=1`} title="Netflix  & chill" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Viedeoback