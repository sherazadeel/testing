import React from 'react'

function Signuppage() {
  return (
    <div className='flex items-center rounded-2xl justify-center gap-[20px]'>
    <div className='bg-[#d1d8e0] rounded-xl w-[500px] h-[300px] mt-[50px] flex flex-col gap-[50px]'>
      <form className='flex justify-center items-center flex-col gap-[20px]'>
          <input type="text" placeholder='Enter Name' className='w-[60%] h-[40px] border-none outline-none mt-[20px] pl-[20px] rounded-xl'/>
          <input type="password" placeholder='Enter Password' className='w-[60%] h-[40px] border-none outline-none  pl-[20px] rounded-xl'/>
          <input type="password" placeholder='Enter Admin Password' className='w-[60%] h-[40px] border-none outline-none  pl-[20px] rounded-xl'/>
      </form>
      <div className='flex item-center justify-center'>
          <button className='w-[150px] bg-[red] text-[20px] p-[5px] rounded-2xl text-white'>Save Account</button>
          
      </div>
    </div>
  </div>
  )
}

export default Signuppage
