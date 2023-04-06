import React from 'react'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'> Sign in to account </h1>
        <p className='py-2'>
          don't have  a account ?
          <Link to='/signup' className='underline'>Sign up </Link>
        </p>
      </div>
      <form>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'> Email Address</label>
          <input className='border p-3' type='email'  />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input className='border p-3' type='password'/>
          </div>
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-800 w-full p-4 my-2 text-white'>
             Sign in
          </button>
      </form>
    </div>
  )
}

export default Signin