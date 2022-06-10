import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import ChartGender from "../../components/chart_gender/ChartGender";
import ChartTrips from "../../components/chart_trips/ChartTrips";
import ChartInterest from "../../components/chart_interest/ChartInterest";
import { toast } from 'react-toastify'
import Axios from 'axios'
import { API_URL } from '../../config/url'

function Home() {
	const [totalUser, setTotalUser] = useState("")
	const [totalTrip, setTotalTrip] = useState("")
	const [totalMale, setTotalMale] = useState("")
	const [totalFemale, setTotalFemale] = useState("")
	const [dataInterest, setDataInterest] = useState("")
	const [dataTripMonth, setDataTripMonth] = useState("")

	function getTotalUser() {
		Axios.post(`${API_URL}/user/list`)
			.then((response) => {
				setTotalUser(response.data.data.total_items)
			}).catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Can't Connect to Our Server");
				}
			})
	}

	function getTotalTrip() {
		Axios.post(`${API_URL}/trip/list`)
			.then((response) => {
				setTotalTrip(response.data.data.total_items)
			}).catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Can't Connect to Our Server");
				}
			})
	}

	function getUserGender() {
		Axios.get(`${API_URL}/user/gender`)
			.then((response) => {
				setTotalMale(response.data.male)
				setTotalFemale(response.data.female)
			}).catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Can't Connect to Our Server");
				}
			})
	}

	function getUserInterest() {
		Axios.get(`${API_URL}/user/interest`)
			.then((response) => {
				setDataInterest(response.data.data)
			}).catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message)
				} else {
					toast.error("Can't Connect to Our Server")
				}
			})
	}

	function getTripMonth() {
		Axios.get(`${API_URL}/trip/month`)
			.then((response) => {
				setDataTripMonth(response.data.data)
			}).catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message)
				} else {
					toast.error("Can't Connect to Our Server")
				}
			})
	}

	useEffect(() => {
		getTotalUser()
		getTotalTrip()
		getUserGender()
		getUserInterest()
		getTripMonth()
	}, [])

	return (
		<div>
			<div className="home">
				<Sidebar />
				<div className="homeContainer">
					<Navbar />
					<div className="widgets">
						<Widget type="user" totalUser={totalUser} />
						<Widget type="trips" totalTrip={totalTrip} />
					</div>
					<div className="charts">
						<ChartGender totalMale={totalMale} totalFemale={totalFemale} />
						<ChartInterest dataInterest={dataInterest} />
						<ChartTrips dataTripMonth={dataTripMonth} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
