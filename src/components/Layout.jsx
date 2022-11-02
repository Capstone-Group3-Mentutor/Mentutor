import React from 'react'
import SideBar from './SideBar'

const Layout = ({children}) => {
  return (
    <div className='w-full h-screen bg-main overflow-auto'>
      <div className='flex flex-row'>
      <SideBar/>
        {children}
        </div>
    </div>
  )
}

export default Layout