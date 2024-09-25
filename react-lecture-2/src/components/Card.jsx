import React from 'react'

const Card = () => {
  return (
    <div className='w-80 h-96 bg-zinc-300 rounded-lg flex flex-col gap-1 items-center justify-center p-1'>
      <div className='h-16 w-16 rounded-full overflow-hidden bg-zinc-400'></div>
      <h2 className='text-xl font-semibold'>Name</h2>
      <h2 className='text-zinc-200 font-semibold text-sm tracking-tight leading-1'>email@gmail.com</h2>
      <p className='text-center text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam.</p>
    </div>
  )
}

export default Card
