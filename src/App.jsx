import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Pages/Dashboard'
import Audits from './Pages/Audits'
import Articles from './Pages/Articles'
import Clients from './Pages/Clients'
import Contacts from './Pages/Contacts'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Settings from './Pages/Settings'

const App = () => {
  return (
   <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='/audits' element={<Audits/>}></Route>
          <Route path='/articles' element={<Articles/>}></Route>
          <Route path='/clients' element={<Clients/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
        </Route>
      </Routes>
   </div>
  )
}

export default App