import React from 'react'
import ThemeToggle from '../builder/ThemeToggle'
const Navbar = () => {
  return (
    <div className='text-slate-300  font-extrabold bg-black h-12 flex justify-between items-center py-8 px-4 text-3xl '>
        Form builder
        <ThemeToggle/>
    </div>
  )
}

export default Navbar