import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetails from '../components/UserDetails'

const rounting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:name" element={<UserDetails />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default rounting
