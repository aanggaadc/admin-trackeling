import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./chartTrips.scss";

function ChartTrips({ dataTripMonth }) {
	const data = [
		{
			name: "January",
			trips: dataTripMonth.january,
		},
		{
			name: "February",
			trips: dataTripMonth.february,
		},
		{
			name: "March",
			trips: dataTripMonth.march,
		},
		{
			name: "April",
			trips: dataTripMonth.april,
		},
		{
			name: "May",
			trips: dataTripMonth.mei,
		},
		{
			name: "June",
			trips: dataTripMonth.juny,
		},
	];

	return (
		<div className="chart-trips">
			<div className="title">Trips in Last 6 Months</div>
			<AreaChart
				width={600}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Area type="monotone" dataKey="trips" stroke="#188cbd" fill="#25abe3" />
			</AreaChart>
		</div>
	);
}

export default ChartTrips;
