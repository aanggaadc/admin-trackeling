import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from "mdbreact";
import Axios from "axios";

function TableUsers() {
	const [datatable, setDatatable] = useState({
		columns: [
			{
				label: "Username",
				field: "username",
				width: 270,
				// attributes: {
				// 	"aria-controls": "DataTable",
				// 	"aria-label": "Username",
				// },
			},
			{
				label: "Email",
				field: "email",
				width: 270,
			},
			{
				label: "Gender",
				field: "gender",
				sort: "disabled",
				width: 150,
			},
			{
				label: "Age",
				field: "age",
				sort: "asc",
				width: 100,
			},
			{
				label: "Location",
				field: "location",
				width: 150,
			},
			{
				label: "Phone Number",
				field: "phone_number",
				width: 100,
			},
		],
		rows: [
			{
				username: "Tiger Nixon",
				email: "System Architect",
				gender: "Edinburgh",
				age: "61",
				location: "2011/04/25",
				phone_number: "$320",
			},
			{
				username: "Garrett Winters",
				email: "Accountant",
				gender: "Tokyo",
				age: "63",
				location: "2011/07/25",
				phone_number: "$170",
			},
			{
				username: "Ashton Cox",
				email: "Junior Technical Author",
				gender: "San Francisco",
				age: "66",
				location: "2009/01/12",
				phone_number: "$86",
			},
			{
				username: "Cedric Kelly",
				email: "Senior Javascript Developer",
				gender: "Edinburgh",
				age: "22",
				location: "2012/03/29",
				phone_number: "$433",
			},
			{
				username: "Airi Satou",
				email: "Accountant",
				gender: "Tokyo",
				age: "33",
				location: "2008/11/28",
				phone_number: "$162",
			},
			{
				username: "Brielle Williamson",
				email: "Integration Specialist",
				gender: "New York",
				age: "61",
				location: "2012/12/02",
				phone_number: "$372",
			},
			{
				username: "Herrod Chandler",
				email: "Sales Assistant",
				gender: "San Francisco",
				age: "59",
				location: "2012/08/06",
				phone_number: "$137",
			},
			{
				username: "Rhona Davidson",
				email: "Integration Specialist",
				gender: "Tokyo",
				age: "55",
				location: "2010/10/14",
				phone_number: "$327",
			},
			{
				username: "Colleen Hurst",
				email: "Javascript Developer",
				gender: "San Francisco",
				age: "39",
				location: "2009/09/15",
				phone_number: "$205",
			},
			{
				username: "Sonya Frost",
				email: "Software Engineer",
				gender: "Edinburgh",
				age: "23",
				location: "2008/12/13",
				phone_number: "$103",
			},
			{
				username: "Ashton Cox",
				email: "Junior Technical Author",
				gender: "San Francisco",
				age: "66",
				location: "2009/01/12",
				phone_number: "$86",
			},
			{
				username: "Cedric Kelly",
				email: "Senior Javascript Developer",
				gender: "Edinburgh",
				age: "22",
				location: "2012/03/29",
				phone_number: "$433",
			},
			{
				username: "Airi Satou",
				email: "Accountant",
				gender: "Tokyo",
				age: "33",
				location: "2008/11/28",
				phone_number: "$162",
			},
			{
				username: "Brielle Williamson",
				email: "Integration Specialist",
				gender: "New York",
				age: "61",
				location: "2012/12/02",
				phone_number: "$372",
			},
			{
				username: "Herrod Chandler",
				email: "Sales Assistant",
				gender: "San Francisco",
				age: "59",
				location: "2012/08/06",
				phone_number: "$137",
			},
			{
				username: "Rhona Davidson",
				email: "Integration Specialist",
				gender: "Tokyo",
				age: "55",
				location: "2010/10/14",
				phone_number: "$327",
			},
			{
				username: "Colleen Hurst",
				email: "Javascript Developer",
				gender: "San Francisco",
				age: "39",
				location: "2009/09/15",
				phone_number: "$205",
			},
			{
				username: "Sonya Frost",
				email: "Software Engineer",
				gender: "Edinburgh",
				age: "23",
				location: "2008/12/13",
				phone_number: "$103",
			},
			{
				username: "Ashton Cox",
				email: "Junior Technical Author",
				gender: "San Francisco",
				age: "66",
				location: "2009/01/12",
				phone_number: "$86",
			},
			{
				username: "Cedric Kelly",
				email: "Senior Javascript Developer",
				gender: "Edinburgh",
				age: "22",
				location: "2012/03/29",
				phone_number: "$433",
			},
			{
				username: "Airi Satou",
				email: "Accountant",
				gender: "Tokyo",
				age: "33",
				location: "2008/11/28",
				phone_number: "$162",
			},
		],
	});

	// const getUserList = () => {
	// 	Axios.
	// }

	return (
		<MDBDataTableV5
			hover
			searching={false}
			data={datatable}
			entries={5}
			entriesOptions={[5, 10, 15]}
		/>
	);
}

export default TableUsers;
