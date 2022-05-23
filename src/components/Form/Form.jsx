import React from "react";
import { useForm } from "react-hook-form";
import './Form.scss'

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
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

export default Form