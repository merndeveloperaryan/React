import React from 'react'

const Form = () => {
  return (
    <div className='container p-1 bg-sky-300 flex justify-around'>
      <form className=''>
        <input type="text" placeholder='name' name='name' />
        <input type="email" placeholder='email' name='email' />
        <input type="text" placeholder='image' name='image' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
