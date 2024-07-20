import React from 'react'
import { bottombar } from '../assets/index'
import { Link } from 'react-router-dom'

function Bottombar() {
  return (
    <div>
      <div className='h-[40px] flex items-center justify-around'>
        <ul className='flex items-center justify-center'>
            {bottombar.map((value,index)=>(

            <Link to={value.to} className={value.className} key={index}>{value.tittle}</Link>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Bottombar
