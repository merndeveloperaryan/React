import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='w-full h-[10vh] bg-rose-600 flex justify-start items-center px-5 gap-4'>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
  )
}

export default Nav
