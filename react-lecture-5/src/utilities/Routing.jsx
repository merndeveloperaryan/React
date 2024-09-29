import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import Show from '../components/Show'



const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/user' element={<User />} />
      <Route path='/user/:id' element={<Show />} />
    </Routes>
  )
}

export default Routing
