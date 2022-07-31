import React from 'react'
import Toggle from './Toggle'

export default function Header() {
  return (
    <div className=' dark:text-gray-100 flex justify-around p-5'>
      <h1 className='text-2xl font-extrabold'>DevFinder</h1>
      <div className="toggle">
        <Toggle />
      </div>
      
    </div>
  )
}