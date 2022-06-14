import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";
import "./TableUsers.scss";
import { Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config/url";
import SearchUsers from "../../components/search_users/SearchUsers";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import paginationFactory, {
	PaginationProvider,
	PaginationListStandalone,
	SizePerPageDropdownStandalone,
	PaginationTotalStandalone,
} from "react-bootstrap-table2-paginator";

function TableUsers() {
	const [users, setUsers] = useState([]);
	const [totalRows, setTotalRows] = useState(0);
	const [pageState, setPageState] = useState({
		pageNumber: 1,
		pageSize: "",
	});
	const [filter, setFilter] = useState({
		username: "",
		email: "",
		sex: "",
		location: "",
	});

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const columns = [
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
			dataField: "profile.age",
			text: "Age",
			headerStyle: () => {
				return { width: "25%" };
			},
		},
		{
			dataField: "profile.sex",
			text: "Gender",
			headerStyle: () => {
				return { width: "32%" };
			},
		},
		{
			dataField: "profile.location",
			text: "Location",
			headerStyle: () => {
				return { width: "49%" };
			},
		},
		{
			dataField: "profile.phone_number",
			text: "Phone Number",
			headerStyle: () => {
				return { width: "47%" };
			},
		},
		{
			dataField: "is_active",
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
						<Link to={`/edit-user/${row.user_id}`}>
							<Button variant="none">
								<FaEdit color="blue" />
							</Button>
						</Link>

						<Button
							variant="none"
							// onClick={() => {
							// 	handleDelete(row.user_id);
							// }}
						>
							<FaTrash color="red" />
						</Button>
					</div>
				);
			},
		},
	];

	const handleDelete = (id) => {
		Axios.delete(`${API_URL}/user/delete/${id}`)
			.then((response) => {
				// console.log(response.data.data);
				toast.success(response.data.message);
				getUserList();
			})
			.catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Something Wrong");
				}
				console.log("====================================");
				console.log(error);
				console.log("====================================");
			});
	};

	const getUserList = () => {
		Axios.post(`${API_URL}/user/list`, { ...filter, ...pageState })
			.then((response) => {
				// console.log("DATA RESPONSE", response);
				setUsers(response.data.data.items);
				setTotalRows(response.data.data.total_items);
			})
			.catch((error) => {
				console.log("===========================================");
				console.log("ERROR", error);
				console.log("===========================================");
			});
	};

	useEffect(() => {
		getUserList();
	}, [pageState, filter]);

	const options = {
		custom: true,
		showTotal: true,
		totalSize: totalRows,
		page: pageState.pageNumber,
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
				text: "all",
				value: totalRows,
			},
		],
	};

	function handleTableAction() {
		return (type, { page, sizePerPage }) => {
			console.log(sizePerPage);
			const pageNumber = page || 1;
			setPageState((prev) => {
				return { ...prev, pageNumber: pageNumber, pageSize: sizePerPage };
			});
		};
	}

	return (
		<>
			<SearchUsers filter={filter} setFilter={setFilter} />
			<PaginationProvider pagination={paginationFactory(options)}>
				{({ paginationProps, paginationTableProps }) => {
					return (
						<>
							<BootstrapTable
								keyField="uuid"
								data={users}
								remote
								columns={columns}
								pagination={paginationFactory(options)}
								onTableChange={handleTableAction(paginationProps.setPageState)}
								{...paginationTableProps}
							/>
							<div className="row">
								<div className="col-md-6 col-lg-6">
									<SizePerPageDropdownStandalone {...paginationProps} />
									<PaginationTotalStandalone {...paginationProps} />
								</div>
								<div className="col-md-6 col-lg-6 mt-2 mt-md-0 mt-lg-0 mt-sm-2">
									<PaginationListStandalone {...paginationProps} />
								</div>
							</div>
						</>
					);
				}}
			</PaginationProvider>
			{/* <Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure want to delete?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="danger" onClick={handleClose, () => {}}>
						Accept
					</Button>
				</Modal.Footer>
			</Modal> */}
		</>
	);
}

export default TableUsers;
