import React from 'react'
import './List.scss'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Navbar from '../../../components/Navbar/Navbar'
import Chart_User from '../../../components/Chart_User/Chart_User'

function List() {
    return (
      <div className="list">
          <Sidebar />
          <div className="listContainer">
            <Navbar />
            <div className="charts">
            <Chart_User aspect={3 / 1} title="User By Gender" />
            
          </div>
          </div>
      </div>
    )
  }
  
  export default List;