import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

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
					{/* <div className="charts">
						<Featured />
						<Chart aspect={2 / 1} title="Last 6 Months" />
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Home;
