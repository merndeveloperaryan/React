import React from 'react'

const Card = ({data, removeCard, index}) => {

  const {name, email, image } = data;

  return (
    <div className='w-56 h-64 bg-zinc-300 rounded-lg flex flex-col gap-1 items-center justify-center p-1'>
      <div className='h-16 w-16 rounded-full overflow-hidden bg-zinc-400'>
        <img className='object-cover h-full w-full' src={image} alt={name} />
      </div>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <h2 className='text-zinc-200 font-semibold text-sm tracking-tight leading-1'>{email}</h2>
      <p className='text-center text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam.</p>
      <button onClick={()=>removeCard(index)} className='bg-red-500 text-white rounded-lg py-1 px-2'>Remove</button>
    </div>
  )
}

export default Card
