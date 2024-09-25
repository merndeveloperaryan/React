import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {

  const [val, setVal] = useState([])

  const addData = (data) => {
    setVal([...val, data])
  }

  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col gap-3 justify-center items-center'>
        <Cards data={val} />
        <Form addData={addData} />
    </div>
  )
}

export default App
