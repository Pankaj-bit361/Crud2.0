import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivatesRoutes from './PrivatesRoutes'

const MainRoutes = () => {
  return (
    <div>
      
<Routes>
<Route path="/" element={<Home/>} /> (Product List will be displayed here)
  <Route path="/admin" element={<PrivatesRoutes><Admin/></PrivatesRoutes>} /> (For adding products to DB)
  <Route path="/products/:id" element />
  <Route path="/products/:id/edit"  />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
</Routes>

    </div>
  )
}

export default MainRoutes
