import React, { useState } from 'react'
import imp from "../assets/health logo bgr.png"
import { navbtn } from '../assets/index'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className=''>
      <nav className='w-screen h-[50px] flex items-center border-b-2 border-black'>
        <div className='w-[20%] h-[90]  flex items-center justify-center gap-[10px] '>
            <span className='rounded-full bg-black w-[40px] h-[40px]'><img className='h-[100%] w-[100%]' src={imp} alt="logo"  /></span> 
            <Link to='/' className='text-[27px] text-black '>Asad</Link>
            </div>
        <div className='w-[50%] h-full flex items-center justify-center'>
            
            </div>
        <div className='w-[30%] h-full flex items-center justify-center gap-[30px]'>
      {navbtn.map((value,index)=>(
        <Link to={value.url} key={index} className='w-[100px] h-[35px] border-3 bg-slate-300 text-[16px] rounded-full px-[5px]py-[5px] flex items-center justify-center text-black hover:bg-[#FF5733] hover:text-black duration-[0.5s]'>{value.tittle}</Link>
      ))}
        </div>
      </nav>
    </div>
  )
}