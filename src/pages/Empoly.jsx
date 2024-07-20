import React from 'react'
import { Link } from 'react-router-dom'

function Empoly() {
  return (
       <div className='flex items-center justify-center gap-[20px]'>
      <div className='bg-[#d1d8e0] rounded-xl w-[500px] h-[300px] mt-[50px] flex flex-col gap-[100px]'>
        <form className='flex justify-center items-center flex-col gap-[20px]'>
            <input type="text" placeholder='Enter Name' className='w-[60%] h-[40px] border-none outline-none mt-[20px] pl-[20px] rounded-xl'/>
            <input type="password" placeholder='Enter Password' className='w-[60%] h-[40px] border-none outline-none  pl-[20px] rounded-xl'/>
        </form>
        <div className='flex item-center justify-around'>
            <Link to='/Empoly/login' className='w-[100px] flex items-center justify-center bg-[red] text-[20px] p-[5px] rounded-2xl text-white'>Log-in</Link>
            <Link to="/Empoly/sign-up" className='underline mt-[20px]'>Create Account</Link>
        </div>
      </div>
    </div>
  )
}

export default Empoly

