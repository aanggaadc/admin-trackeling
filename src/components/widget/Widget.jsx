import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import "./widget.scss";

function Widget({ type }) {
	let data = {
		title: "",
		link: "",
		icon: <></>,
	};

	switch (type) {
		case "user":
			data.title = "TOTAL USERS";
			data.link = "View all users";
			data.icon = (
				<BsFillPersonFill
					className="icon"
					style={{ color: "#188cbd", backgroundColor: "rgba(24, 140, 189, 0.2)" }}
				/>
			);
			break;
		case "trips":
			data.title = "TOTAL TRIPS";
			data.link = "View all trips";
			data.icon = (
				<AiOutlinePicture
					className="icon"
					style={{ color: "#ef9b23", backgroundColor: "rgba(239, 155, 35, 0.2)" }}
				/>
			);
			break;

		default:
			break;
	}

	const amount = 200;

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">{amount}</span>
			</div>
			<div className="right">
				<div className="icon">{data.icon}</div>
				<span className="link">{data.link}</span>
			</div>
		</div>
	);
}

export default Widget;
