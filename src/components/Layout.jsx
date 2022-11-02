import React from 'react'
import SideBar from './SideBar'

const Layout = ({children}) => {
  return (
    <div className='w-full h-screen bg-main overflow-auto'>
      <SideBar/>
      <div className='max-w-min ml-[50px] md:ml-[200px] lg:ml-[320px] relative p-6 md:p-14'>{children}</div>      
    </div>
  )
}

export default Layout