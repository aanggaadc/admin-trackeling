import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="items">
          <div className="item">
            Admin
          </div>
          <div className="item">
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar