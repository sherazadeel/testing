import React from 'react'
import {itemInside,tableHead} from '../assets/index'
import { Link } from 'react-router-dom';



function Items() {
  let todayDate = new Date();
  return (
   <div className='w-full flex justify-center flex-col ml-[20px] relative'>
   <div className='bg-[#ffcccc] w-[98%] h-[40px] mt-[10px] flex items-center gap-[10px]'>
    <div className=' h-full flex items-center gap-[10px] '>
      <form>
        <input type="text" placeholder='Search items'  className='w-[200px] bg-transparent py-[5px] px-[10px] border-2 border-solid border-black rounded-[5px] outline-none'/>
    </form><Link to="/Admin/Login/Items/AddItems" className='bg-[#bdc3c7] text-[16px] py-[5px] px-[10px] rounded-[5px]'>Add+</Link></div>
    <div className='felx items-center justify-around gap-[20px] w-[600px]  h-full'>
      <form className='flex items-center gap-[10px]'>
        <label>Customar Name <input type="text" placeholder='Enter Name' className='border-2 bg-transparent border-solid border-black py-[5px] px-[10px] outline-none rounded-[5px] '/></label>
        <input type="text" value = " invoice #0001" className='border-2 bg-transparent outline-none rounded-[5px] border-solid border-black py-[5px] px-[10px]'/>
      </form>
    </div>
    <div className=' h-full w-[500px] flex items-center'>
      <form className='flex items-center gap-[10px]'>
        <input type="text" value={todayDate.toLocaleDateString()}  className='w-[150px] bg-transparent outline-none rounded-[5px] py-[5px] px-[8px] border-2 border-solid border-black'/>
        <input type="text" value="Time : 04:00 am" className='w-[130px] bg-transparent outline-none rounded-[5px] py-[5px] px-[8px] border-2 border-solid border-black'/>
        <input type="text" value="Slip no : 01" className=' py-[5px] bg-transparent outline-none rounded-[5px] px-[10px] border-2 border-solid border-black'/>
      </form>
    </div>

   </div>
   <div className='mt-[10px]'>
    <h1 className='text-4xl text-center font-bold'>ITEMS</h1>
    <table className='border-collapse w-[98%] bg-slate-500 mt-[20px]'>
      <thead className='border-b-black border-b-2 border-b-solid w-full bg-[#84817a]'>
         <tr className=' w-full h-full'>
          <th className='border-2 border-solid border-black w-[5%]'>S.NO</th>
          <th className='border-2 border-solid border-black w-[15%]'>ITEM NAME</th>
          <th className='border-2 border-solid border-black w-[10%]'>RETAIL PRICE</th>
          <th className='border-2 border-solid border-black w-[10%]'>TRADE PRICE</th>
          <th className='border-2 border-solid border-black w-[10%]'>PACKING SIZE</th>
          <th className='border-2 border-solid border-black w-[10%]'>PIECES</th>
          <th className='border-2 border-solid border-black w-[10%]'>COMPANY</th>
          <th className='border-2 border-solid border-black w-[10%]'>TYPE</th>
          <th className='border-2 border-solid border-black w-[10%]'>STOCK</th>
          <th className='border-2 border-solid border-black w-[10%]'>DISCOUNT</th>
          </tr>
          </thead>
      <tbody>
        <tr className='w-full h-full bg-[#d1ccc0]'>
         <td className='border-2 border-solid border-black w-[5%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[15%] text-center'>panadol</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
        </tr>
        <tr className='w-full h-full bg-[#d1ccc0]'>
         <td className='border-2 border-solid border-black w-[5%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[15%] text-center'>panadol</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
        </tr>
        <tr className='w-full h-full bg-[#d1ccc0]'>
         <td className='border-2 border-solid border-black w-[5%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[15%] text-center'>panadol</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
         <td className='border-2 border-solid border-black w-[10%] text-center'>01</td>
        </tr>
      </tbody>
    </table>
   </div>
   </div>
  )
}

export default Items
