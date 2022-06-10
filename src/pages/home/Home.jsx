import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import ChartGender from "../../components/chart_gender/ChartGender";
import ChartTrips from "../../components/chart_trips/ChartTrips";
import ChartInterest from "../../components/chart_interest/ChartInterest";
import { toast } from 'react-toastify'

function Home() {

	return (
		<div>
			<div className="home">
				<Sidebar />
				<div className="homeContainer">
					<Navbar />
					<div className="widgets">
						<Widget type="user" />
						<Widget type="trips" />
					</div>
					<div className="charts">
						<ChartGender />
						<ChartInterest />
						<ChartTrips />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
