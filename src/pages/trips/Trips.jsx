import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TripList from '../../components/TripList/TripList';
import './Trips.scss'

function Trips() {
  return (
    <div className="trips">
        <Sidebar />
        <div className="tripsContainer">
            <Navbar />
            <TripList />
        </div> 
    </div>
  )
}

export default Trips