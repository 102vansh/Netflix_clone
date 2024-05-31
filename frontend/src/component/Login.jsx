import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className=''>
        <img className='w-[100vw] h-[100vh]' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png'/>
      </div>
      <form className=' absolute bg-black h-[300px]'>
      <h1>SignUP</h1>
        <div>
        <input type='text' placeholder='Enter Your Name'></input>
          <input type='text' placeholder='Enter Your Email'></input>
          <input type='text' placeholder='Enter Your Password'></input>
        </div>
      </form>
    </div>
  )
}

export default Login