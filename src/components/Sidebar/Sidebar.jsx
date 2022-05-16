import React from 'react'
import "./Sidebar.css"
import Image from 'react-bootstrap/Image'
import { Link, useNavigate } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <div className="logo">
                <Image src="../../trackling.png" alt='LOGO'/>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Trip List</li>
                <li>Create Trip</li>
                <li>User List</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;