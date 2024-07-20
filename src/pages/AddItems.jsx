import React from 'react'
import Items from './Items'
import { Link } from 'react-router-dom'

function AddItems() {
  return (
    <div className='border-2 border-solid border-black'>
        <Items/>
    <div className='absolute top-[100px] left-[600px] bg-[#dfe4ea] w-[400px] h-[500px] border-2 border-solid border-black flex flex-col'>
     <h1 className='font-bold text-[20px] text-center border-black border-solid border-b-2 mt-[10px] py-[10px]' >ADD ITEMS</h1>
    <form className='flex flex-col gap-[10px] mt-[10px]'>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>ITEM NAME</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>RETAIL PRICE</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>TRADE PRICE</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>PACKING SIZE</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>PIECES</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>COMPANY</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>TYPE</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>STOCK</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
        <div className='flex gap-[10px]'><span className='w-[150px] border-b-2 bg-[#60a3bc] text-center font-semibold ml-[10px]'>DISCOUNT</span><input type="text" className='outline-none w-[215px] border-2 border-solid border-black pl-[5px]' /></div>
    </form>
    <div className='flex items-center justify-center'>
    <Link className='font-bold text-[20px] bg-[#e84118] text-white text-center mt-[10px] border-2 border-black border-solid w-[200px]'>SAVE ITEM</Link>
    </div>
    </div>
    </div>
  )
}

export default AddItems

