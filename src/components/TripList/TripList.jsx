import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./TripList.scss";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { 
	PaginationProvider,
	PaginationListStandalone,
	SizePerPageDropdownStandalone,
	PaginationTotalStandalone,
 } from "react-bootstrap-table2-paginator";
import { Card, Button, Tooltip, OverlayTrigger, Container } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from '../../config/url';
import Axios from 'axios';
import { toast } from 'react-toastify';

function TripList({ setFilter, filter }) {
	const [products, setProducts] = useState([]);

//   const [filter, setFilter] = useState({
// 	trip_name: "",
// 	destination: "",
// 	start_date: "",
// 	end_date: "",
// 	count_member: "",
// 	max_member: ""
//   })

  const [totalRows, setTotalRows] = useState(0);
  const [pageState, setPageState] = useState({
	  pageNumber: 1,
	  pageSize: "",
  });

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
			const pageNumber = page || 1;
			setPageState((prev) => {
				return { ...prev, pageNumber: pageNumber, pageSize: sizePerPage };
			});
		};
	}
	const handleDelete = (id) => {
		Axios.delete(`${API_URL}/trip/delete/${id}`)
			.then((response) => {
				// console.log(response.data.data);
				toast.success(response.data.message);
				getTripList();
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

	const getTripList = () => {
		Axios.post(`${API_URL}/trip/filter`, { ...filter, ...pageState})
      		.then((response)=>{
        		const data = response.data.data.items
				data.map((item, idx)=>{
					item.number = ((pageState.pageNumber-1)*10)+idx + 1
				})
        		setProducts(data)
				setTotalRows(response.data.data.total_items);
			})
    	  	.catch((error) => {
				if (error.response) {
					toast.error(error.response.data.data.message);
				} else {
					toast.error("Internal Server Error");
				}
			});
	}

  	useEffect(()=>{
      	getTripList()
  	}, [filter, pageState])

	
	const columns = [
		{
			dataField: "number",
			text: " ",
		},
		{
			dataField: "owner.username",
			text: "Host By",
		},
		{
			dataField: "trip_name",
			text: "Trip Name",
		},
		{
			dataField: "destination",
			text: "Destination",
		},
		{
			dataField: "start_date",
			text: "Start Date",
		},
		{
			dataField: "end_date",
			text: "End Date",
		},
		{
			dataField: "count_member",
			text: "Current Member",
		},
		{
			dataField: "max_member",
			text: "Max Member",
		},
		{
			dataField: "description",
			text: "Description",
		},
		{
			dataField: "trip_status",
			text: "Status",
		},
		{
			dataField: "",
			text: "Action",
			formatter: (cell, row) => {
				return (
					<div>
						<Button variant="none">
							<FaEdit color="blue" />
						</Button>
						<Button variant="none" 
							onClick={() => {
									handleDelete(row.trip_id);
								}}>
							<FaTrash color="red" />
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div className="tripList">
			<div className="listContainer">
				<Container>
					<Card className="mt-3">
						<Card.Header>Trip List</Card.Header>
						<Card.Body className="card-table">
						<PaginationProvider pagination={paginationFactory(options)}>
							{({ paginationProps, paginationTableProps }) => {
								return (
									<>
										<BootstrapTable
											keyField="id"
											data={products}
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
						</Card.Body>
					</Card>
				</Container>
			</div>
		</div>
	);
}

export default TripList;
