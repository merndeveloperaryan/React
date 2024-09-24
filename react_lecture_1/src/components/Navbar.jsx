import React from 'react'

const Navbar = ({data}) => {
    
  return (
    <div className='w-full h-20 flex justify-between items-center px-5'>
      <h2 className='text-orange-500 font-bold'>Orange</h2>
      <div className='flex gap-2 bg-orange-500 px-4 py-2 rounded-full text-white'>
        <h2>Favourite</h2>
        {data.filter((item)=>item.added).length}
      </div>
    </div>
  )
}

export default Navbar
