import React from 'react'
import Login from '../Login'
import Navbar from './Navbar'
import NavandSideBar from './NavandSideBar'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <div>
      <NavandSideBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/audits' element={<}></Route>
      </Routes>
   </div>
  )
}

export default App