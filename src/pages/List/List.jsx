import React from 'react'
import './List.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Chart from '../../components/Chart/Chart'

function List() {
  return (
    <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="charts">
          <Chart aspect={4 / 1} title="Last 6 Month" />
        </div>
        </div>
    </div>
  )
}

export default List;