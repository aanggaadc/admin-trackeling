import React from 'react'
import './Edit.scss'
import Navbar from '../../../components/Navbar/Navbar'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { useForm } from "react-hook-form";

function Edit_User() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="edit">
      <Sidebar />
    <div className="editContainer">
      <Navbar />  
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">Edit User</div>
        <div className="input-row">
            <p>Username</p>
            <input {...register("username")} />
        </div>
        <div className="input-row">
            <p>Email</p>
            <input {...register("email")} />
        </div>
        <div className="input-row">
            <p>Handphone</p>
            <input {...register("handphone")} />
        </div>
        <div className="input-row">
            <p>Password</p>
            <input {...register("password")} />
        </div>
        <input type="submit" />
    </form>
    </div>
    </div>
    </div>
  )
}

export default Edit_User