import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import Axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../../config/url";
import moment from "moment";
import "./EditTripList.scss";

function EditTripList({ show, handleClose, currentId, getTripList, setCurrentId }) {
	const [image, setImage] = useState("");
	const [data, setData] = useState({});

	function getTripData() {
		if (currentId) {
			Axios.get(`${API_URL}/trip/detail/${currentId}`)
				.then((response) => {
					console.log(response.data.data);
					setData(response.data.data);
				})
				.catch((error) => {
					console.log(error);
					if (error.response) {
						toast.error(error.response.data.message);
					} else {
						toast.error("Cannot Connect to Server");
					}
				});
		}
	}

	useEffect(() => {
		getTripData();
	}, [currentId]);

	return (
		<div>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Edit Trip</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						initialValues={{
							trip_name: data.trip_name,
							destination: data.destination,
							start_date: data.start_date,
							end_date: data.end_date,
							count_member: data.count_member,
							max_member: data.max_member,
							description: data.description,
							trip_status: data.trip_status,
							image: data.trip_image,
						}}
						enableReinitialize={true}
						onSubmit={(values) => {
							if (values.max_member < values.count_member) {
								toast.error("Max member can not be set below current member");
							} else if (values.start_date > values.end_date) {
								toast.error("Please input the right date");
							} else {
								const formData = new FormData();
								formData.append("trip_name", values.trip_name);
								formData.append("destination", values.destination);
								formData.append("start_date", values.start_date);
								formData.append("end_date", values.end_date);
								formData.append("max_member", values.max_member);
								formData.append("description", values.description);
								formData.append("trip_status", values.trip_status);
								formData.append("image", values.image);

								Axios.put(`${API_URL}/trip/edit_trip/${currentId}`, formData)
									.then((response) => {
										console.log(response);
										toast.success("Trip Successfully Edited!!");
										getTripList();
										setCurrentId("");
									})
									.catch((error) => {
										if (error.response) {
											toast.error(error.response.data.message);
										} else {
											toast.error("Cannot Connect to Server");
										}
									});
							}
						}}
					>
						{({ values, handleChange, handleSubmit, setFieldValue }) => (
							<Form id="editUserForm">
								<div className="formGroup">
									<div className="left">
										<label for="trip_name">Trip Name</label>
										<input
											type="text"
											className="formControl"
											name="trip_name"
											id="trip_name"
											value={values.trip_name}
											onChange={handleChange}
										></input>
									</div>
									<div className="right">
										<label for="destination">Destination</label>
										<input
											type="text"
											className="formControl"
											name="destination"
											id="destination"
											value={values.destination}
											onChange={handleChange}
										></input>
									</div>
								</div>
								<div className="formGroup">
									<div className="left">
										<label for="start_date">Start Date</label>
										<input
											type="date"
											className="formControl"
											id="start_date"
											name="start_date"
											value={values.start_date}
											onChange={handleChange}
											min={moment().add(1, "days").format("YYYY-MM-DD")}
										/>
									</div>
									<div className="right">
										<label for="end_date">End Date</label>
										<input
											type="date"
											className="formControl"
											id="end_date"
											name="end_date"
											value={values.end_date}
											onChange={handleChange}
											min={moment().add(1, "days").format("YYYY-MM-DD")}
										/>
									</div>
								</div>
								<div className="formGroup">
									<div className="left">
										<label for="max_member">Max Member</label>
										<input
											type="number"
											className="formControl"
											id="max_member"
											name="max_member"
											value={values.max_member}
											onChange={handleChange}
											min={2}
										/>
									</div>
									<div className="right">
										<label for="tripstatus">Trip Status</label>
										<select
											id="tripstatus"
											className="formControl"
											value={values.trip_status}
											name="trip_status"
											onChange={handleChange}
										>
											<option value="Open">Open</option>
											<option value="Close">Close</option>
										</select>
									</div>
								</div>
								<div className="formGroup">
									<textarea
										name="description"
										placeholder="Trip Description"
										onChange={handleChange}
										value={values.description}
									/>
								</div>
								<div className="formGroup">
									<input
										type="file"
										id="image"
										name="image"
										accept="image/*"
										onChange={(e) => {
											setImage(e.target.files[0]);
											setFieldValue("image", e.currentTarget.files[0]);
										}}
									/>
								</div>
								<div className="imgContainer">
									<img
										className="imgUpload img-fluid"
										src={image ? URL.createObjectURL(image) : API_URL + values.image}
									/>
								</div>

								<div className="btnGroup">
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
									<Button
										variant="primary"
										onClick={() => {
											handleSubmit();
											handleClose();
										}}
									>
										Save Changes
									</Button>
								</div>
							</Form>
						)}
					</Formik>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default EditTripList;
