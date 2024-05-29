import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

function LayoutAdmin() {
  return (
    <div className='admin-grid'>
        <AdminSidebar/> 
        <Outlet/>
    </div>
  )
}

export default LayoutAdmin