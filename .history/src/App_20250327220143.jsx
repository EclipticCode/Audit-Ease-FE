import React from 'react'
import Login from '../Login'
import Navbar from './Navbar'
import NavandSideBar from './NavandSideBar'
import Dashboard from './Pages/'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <div>
      <NavandSideBar/>
      <Routes>
        <Route path='/dashboard' element={}></Route>
      </Routes>
   </div>
  )
}

export default App