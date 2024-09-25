import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
import { set } from 'react-hook-form'

const App = () => {

  const [val, setVal] = useState([])

  const addData = (data) => {
    setVal([...val, data])
  }

  const removeCard = (cardid) => setVal(val.filter((item, index)=> index != cardid))

  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col gap-3 justify-center items-center'>
        <Cards data={val} removeCard={removeCard} />
        <Form addData={addData} />
    </div>
  )
}

export default App
