import React from 'react'
import Login from '../Login'
import Navbar from './Navbar'
import NavandSideBar from './NavandSideBar'
import Dashboard from './Pages/Dashboard'
import Audits from './Pages/Audits'
import Articles from './Pages/Articles'
import Clients from './Pages/Clients'
import Contacts from './Pages/Contacts'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <div>
      <NavandSideBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/audits' element={<Audits/>}></Route>
        <Route path='/articles' element={<Articles/>}></Route>
        <Route path='/clients' element={<Clients/>}></Route>
        <Route path='/contacts' element={}></Route>
        <Route path='' element={}></Route>
      </Routes>
   </div>
  )
}

export default App