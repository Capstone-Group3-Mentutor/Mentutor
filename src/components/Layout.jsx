import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full h-screen bg-main overflow-auto'>
        {children}
    </div>
  )
}

export default Layout