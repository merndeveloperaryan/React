import React from 'react'
import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='container h-96 flex flex-wrap gap-3 justify-start items-center p-4 overflow-auto'>
      {data.map((item, index)=>{
        return <Card key={index} data={item} />
      })}
    </div>
  )
}

export default Cards
