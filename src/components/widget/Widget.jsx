import React from "react";
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import "./widget.scss";

function Widget({ type, totalUser, totalTrip }) {
	let data = {
		title: "",
		link: "",
		icon: <></>,
		summary: ""
	};

	switch (type) {
		case "user":
			data.title = "TOTAL USERS";
			data.link = <Link style={{ textDecoration: "none", color: "black" }} to='/users'>View All User</Link>;
			data.icon = (
				<BsFillPersonFill
					className="icon"
					style={{ color: "#188cbd", backgroundColor: "rgba(24, 140, 189, 0.2)" }}
				/>
			);
			data.summary = totalUser
			break;
		case "trips":
			data.title = "TOTAL TRIPS";
			data.link = <Link style={{ textDecoration: "none", color: "black" }} to='/trips'>View All Trips </Link>;
			data.icon = (
				<AiOutlinePicture
					className="icon"
					style={{ color: "#ef9b23", backgroundColor: "rgba(239, 155, 35, 0.2)" }}
				/>
			);
			data.summary = totalTrip
			break;

		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">{data.summary}</span>
			</div>
			<div className="right">
				<div className="icon">{data.icon}</div>
				<span className="link">{data.link}</span>
			</div>
		</div>
	);
}

export default Widget;
