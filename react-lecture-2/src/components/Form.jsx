import React from 'react'
import { useForm } from 'react-hook-form'


const Form = ({addData}) => {

  const {register, handleSubmit} = useForm()


  return (
    <div className='container p-1'>
      <form className=' flex justify-center gap-3' onSubmit={handleSubmit(data=>addData(data))}>
        <input {...register('name')} className='outline-none p-3 text-xs font-medium bg-zinc-200 text-black rounded-lg' type="text" placeholder='name' name='name' />
        <input {...register('email')} className='outline-none p-3 text-xs font-medium bg-zinc-200 text-black rounded-lg' type="email" placeholder='email' name='email' />
        <input {...register('image')} className='outline-none p-3 text-xs font-medium bg-zinc-200 text-black rounded-lg' type="text" placeholder='image' name='image' />
        <input className='py-2 px-4 rounded-lg text-xs bg-blue-500 text-white font-semibold' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form