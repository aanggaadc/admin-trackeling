import React, { useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Axios from "axios";
import "./TableUsers.scss";

function TableUsers() {
	const columns = [
		{
			dataField: "username",
			text: "Username",
			headerStyle: () => {
				return { width: "35%" };
			},
		},
		{
			dataField: "email",
			text: "Email",
			headerStyle: () => {
				return { width: "40%" };
			},
		},
		{
			dataField: "age",
			text: "Age",
			headerStyle: () => {
				return { width: "20%" };
			},
		},
		{
			dataField: "gender",
			text: "Gender",
			headerStyle: () => {
				return { width: "30%" };
			},
		},
		{
			dataField: "location",
			text: "Location",
			headerStyle: () => {
				return { width: "30%" };
			},
		},
		{
			dataField: "phoneNumber",
			text: "Phone Number",
			headerStyle: () => {
				return { width: "35%" };
			},
		},
	];

	const [users, setUsers] = useState(
		new Array(37).fill(null).map((data, index) => {
			const key = index + 1;
			return {
				username: `username${key}`,
				email: `username${key}@email.com`,
				age: `${key * 20}`,
				gender: "male",
				location: "Jakarta",
				phoneNumber: "081234567890",
			};
		})
	);

	const options = {
		sizePerPageList: [
			{
				text: "5",
				value: 5,
			},
			{
				text: "10",
				value: 10,
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
