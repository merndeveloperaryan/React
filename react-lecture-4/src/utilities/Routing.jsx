import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetails from '../components/UserDetails'
import Provider from '../components/Provider'
import Show from '../components/Show'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/provider' element={<Provider />} />
      <Route path='/show' element={<Show />} />
      <Route path='/user' element={<User />} >
        <Route path='/user/:name' element={<UserDetails />} />
      </Route>
    </Routes>
  )
}

export default Routing
