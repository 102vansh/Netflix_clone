import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'
import Search from './Search'
const Body = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                
                <Route path='/browse' element={<Browser/>}> </Route>
                <Route path='/search' element={<Search/>}></Route>



            </Routes>
        </BrowserRouter>
    </div>
    
  )
}

export default Body