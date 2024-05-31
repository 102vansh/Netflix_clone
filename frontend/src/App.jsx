import React from 'react'
import Browser from './component/Browser'
import Body from './component/Body'
import { Toaster } from 'react-hot-toast'
import MovieDialog from './component/MovieDialog'

const App = () => {
  return (
    <div className=''>
      <Body/>
      <Toaster/>
      <MovieDialog/>
    </div>
  )
}

export default App