import React from 'react'
import Viedeoititle from './Viedeoititle'
import Viedeoback from './Viedeoback'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
  const movie = useSelector(store=>store.movie?.nowplayingmovie)
  if(!movie) return
  const{overview,id,title} = movie[6]
  return (
    <div>
       <Viedeoititle title={title} overview ={overview}/> 
       <Viedeoback movieid = {id} bool={true}/>
    </div>
  )
}

export default Maincontainer