import React from 'react'
import { useForm } from "react-hook-form";
import './EditForm.scss'

function EditForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-row">
            <p>Trip Name</p>
            <input {...register("tripName")} />
        </div>
        <div className="input-row">
            <p>Destination</p>
            <input {...register("destination")} />
        </div>
        <div className="input-row">
            <p>Start Date</p>
            <input {...register("startDate")} />
        </div>
        <div className="input-row">
            <p>End Date</p>
            <input {...register("endDate")} />
        </div>
        <div className="input-row">
            <p>Max Member</p>
            <input {...register("maxMember")} />
        </div>
        <div className="input-row">
            <p>Description</p>
            <input {...register("description")} />
        </div>
        <div className="input-row">
            <p>Image</p>
            <input {...register("image")} />
        </div>
        <input type="submit" />
    </form>
    </div>
  )
}

export default EditForm