import React from 'react'
import './Create.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Form from '../../components/Form/Form'

function Create() {
  return (
    <div className="create">
        <Sidebar />
        <div className="createContainer">
            <Navbar />
            <div className="form">
                <Form />
            </div>
        </div>
    </div>
  )
}

export default Create