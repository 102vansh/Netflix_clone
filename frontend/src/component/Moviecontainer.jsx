import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import store from './Store'

const Moviecontainer = () => {
  const movies = useSelector((store)=>store.movie)
  console.log(movies)
  return (
    <div className='bg-black'>
    <div className=''>
    <MovieList title={'Popular Movie'} movie = {movies.popularmovie}/>
    <MovieList title={'Now Playing Movie'} movie = {movies.nowplayingmovie}/>
    <MovieList title={'Top Rated Movies'} movie = {movies.topratedmovie}/> 
     <MovieList title={'Upcomming Movie'} movie = {movies.upcommingmovie}/>
    </div>
   
    </div>
  )
}

export default Moviecontainer