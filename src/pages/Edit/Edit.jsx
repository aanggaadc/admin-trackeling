import React from 'react'
import './Edit.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import EditForm from '../../components/EditForm/EditForm'

function Edit() {
  return (
    <div className="edit">
        <Sidebar />
        <div className="editContainer">
          <Navbar />
          <div className="editform">
            <EditForm />
          </div>
        </div>
    </div>
  )
}

export default Edit