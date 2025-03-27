import React from 'react'
import Login from '../Login'
import Navbar from './Navbar'
import NavandSideBar from './NavandSideBar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <div>
      <NavandSideBar/>
      <Routes>
        <Route path=''></Route>
      </Routes>
   </div>
  )
}

export default App