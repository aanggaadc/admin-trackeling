import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Formik } from "formik";
import "./EditUser.scss";
import { Form } from "react-bootstrap";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { toast } from "react-toastify";

function EditUser() {
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
	});

	const getUserData = () => {
		Axios.get(`${API_URL}/user/single`).then((response) => {
			const apiData = response.data.data;
			setUser({
				username: apiData.username,
				email: apiData.email,
				phone_number: apiData.phone_number,
			});
		});
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div>
			<div className="editUser">
				<Sidebar />
				<div className="editUserContainer">
					<Navbar />
					<div className="formInput">
						<div className="title">EDIT USER</div>
						<Formik
							initialValues={user}
							enableReinitialize={true}
							onSubmit={(values) => {
								console.log("VALUES", values);

								Axios.put(`${API_URL}/user/edit`, values)
									.then((response) => {
										toast.success(response.data.message);
										getUserData();
									})
									.catch((error) => {
										if (error.response) {
											toast.error(error.response.data.message);
										} else {
											toast.error("Cannot Connect to Server");
										}
									});
							}}
						>
							{({ values, handleChange, handleSubmit }) => (
								<Form id="editUserForm">
									<div className="formGroup">
										<div className="left">
											<label for="username">Username</label>
											<input
												type="text"
												className="formControl"
												name="username"
												id="username"
												required
												value={values.username}
												onChange={handleChange}
											></input>
										</div>
										<div className="right">
											<label for="email">Email</label>
											<input type="email" className="formControl" name="email" id="email"></input>
										</div>
									</div>
									<div className="formGroup">
										<div className="left">
											<label for="phone_number">Phone Number</label>
											<input
												type="text"
												className="formControl"
												name="phone_number"
												id="phone_number"
											></input>
										</div>
										<div className="right">
											<label for="password">Password</label>
											<input
												type="password"
												className="formControl"
												name="password"
												id="password"
											></input>
										</div>
									</div>
									<div className="btn">
										<button type="submit" className="btnSubmit" onClick={handleSubmit}>
											Submit
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditUser;
