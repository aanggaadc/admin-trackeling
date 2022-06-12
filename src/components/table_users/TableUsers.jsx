import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Axios from "axios";
import "./TableUsers.scss";
import { Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config/url";

function TableUsers() {
	const columns = [
		{
			dataField: "no",
			text: "No",
			headerStyle: () => {
				return { width: "22%" };
			},
		},
		{
			dataField: "username",
			text: "Username",
			headerStyle: () => {
				return { width: "50%" };
			},
		},
		{
			dataField: "email",
			text: "Email",
			headerStyle: () => {
				return { width: "50%" };
			},
		},
		{
			dataField: "age",
			text: "Age",
			headerStyle: () => {
				return { width: "25%" };
			},
		},
		{
			dataField: "gender",
			text: "Gender",
			headerStyle: () => {
				return { width: "32%" };
			},
		},
		{
			dataField: "location",
			text: "Location",
			headerStyle: () => {
				return { width: "49%" };
			},
		},
		{
			dataField: "phoneNumber",
			text: "Phone Number",
			headerStyle: () => {
				return { width: "47%" };
			},
		},
		{
			dataField: "phoneNumber",
			text: "Phone Number",
			headerStyle: () => {
				return { width: "47%" };
			},
		},
		{
			dataField: "isActive",
			text: "is Active",
			headerStyle: () => {
				return { width: "47%" };
			},
		},
		{
			dataField: "",
			text: "Actions",
			headerStyle: () => {
				return { width: "45%" };
			},
			formatter: (cell, row) => {
				return (
					<div className="text-center">
						<Button variant="none">
							<FaEdit color="blue" />
						</Button>
						<Button variant="none">
							<FaTrash color="red" />
						</Button>
					</div>
				);
			},
		},
	];

	const [users, setUsers] = useState([]);

	// const getUserList = () => {
	// 	Axios.get(`${API_URL / user / all}`);
	// };

	const options = {
		sizePerPageList: [
			{
				text: "10",
				value: 10,
			},
			{
				text: "15",
				value: 15,
			},
			{
				text: "20",
				value: 20,
			},
		],
	};

	return (
		<BootstrapTable
			keyField="id"
			data={users}
			columns={columns}
			pagination={paginationFactory(options)}
		/>
	);
}

export default TableUsers;
