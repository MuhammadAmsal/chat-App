import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'

function Sidebar() {
  return (
    <div className='sidebar' >
       <Navbar/>
       <Search/>
       <Chats/>
    </div>
  )
}

export default Sidebar
