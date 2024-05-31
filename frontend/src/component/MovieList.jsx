import React from 'react'
import MovieSlice from './MovieSlice'
import MovieCard from './MovieCard'

const MovieList = ({title,movie}) => {
  return (
    <div>
        <h1 className='text-3xl text-white p-8'>{title}</h1>
        <div className=' relative -mt-[10px] z-10 flex overflow-x-auto no-scrollbar  cursor-pointer '>
            <div className='flex items-center'>
          {
            movie?.map((mov)=>{
                return(
                    <MovieCard key={mov?.id} posterpath={mov?.poster_path} movieid={mov?.id}/>
                    
                )
            })  
          }
               
            </div>
        </div>
    </div>
  )
}

export default MovieList