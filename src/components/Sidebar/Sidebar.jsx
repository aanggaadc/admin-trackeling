import React from 'react'
import "./Sidebar.scss"
import { BiTrip,BiUser,BiAddToQueue } from "react-icons/bi";
import Logo from '../../trackling.png'
// import { Link, useNavigate } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <div className="logo">
                <img src={Logo} alt="TRACKELING"/>
            </div>
        </div>
        <div className="subtitle">
            Dashboard
        </div>
        <div className="center">
            <ul>
                <li>
                    <BiTrip className='icon'/>
                    <span>Trip List</span>
                </li>
                <li>
                    <BiAddToQueue className='icon'/>
                    <span>Create Trip</span>
                </li>
                <li>
                    <BiUser className='icon'/>
                    <span>User List</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;