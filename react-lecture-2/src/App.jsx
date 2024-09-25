import React from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col gap-3 justify-center items-center'>
        <Cards />
        <Form />
    </div>
  )
}

export default App
