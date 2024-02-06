import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Footer from './Footer'

function AdminLayout({children}) {
  return (
    <div className='d-flex '>
        <SideBar/>
        <div className='flex-grow-1'>
            <Header/>
            <main className='main'>{children}</main>
            <Footer/>
        </div>
    </div>
  )
}

export default AdminLayout