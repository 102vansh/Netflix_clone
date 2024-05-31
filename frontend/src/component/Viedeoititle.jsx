import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const Viedeoititle = ({title,overview}) => {
  return (
    <div className='absolute text-white pt-[24%] p-12 w-screen aspect-video'>
        <h1 className='text-3xl font-bold mb-2'>{title}</h1>
        <p className=' p-2 w-1/2 text-lg font-semibold'>
       {overview}
        </p>
        <div className='flex mt-7 space-x-3'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-40 space-x-2'>
        <FaPlay /><span>Play</span></button>
        <button  className=' flex items-center px-6 py-2 bg-white text-black rounded-md space-x-1 bg-opacity-40'>
        <CiCircleInfo  className=' size-6'/><span>Watch more</span></button>
        </div>
       
    </div>
  )
}

export default Viedeoititle