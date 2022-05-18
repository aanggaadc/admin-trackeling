import React from 'react'
import './List.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function List() {
  return (
    <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
        </div>
    </div>
  )
}

export default List;