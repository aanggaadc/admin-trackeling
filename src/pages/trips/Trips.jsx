import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TripList from "../../components/TripList/TripList";
import "./Trips.scss";
import FilterList from "../../components/FilterList/FilterList";
import { useState } from "react";

function Trips() {
	const [filter, setFilter] = useState({
		trip_name: "",
		destination: "",
		start_date: "",
		end_date: "",
		count_member: "",
		max_member: "",
	});
	return (
		<div className="trips">
			<Sidebar />
			<div className="tripsContainer">
				<Navbar />
				<div className="contentContainer">
					<div className="title">TRIP LIST</div>
					<FilterList filter={filter} setFilter={setFilter} />
					<TripList filter={filter} setFilter={setFilter} />
				</div>
			</div>
		</div>
	);
}

export default Trips;
