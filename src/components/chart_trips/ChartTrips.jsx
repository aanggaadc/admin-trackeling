import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./chartTrips.scss";

function ChartTrips() {
	const data = [
		{
			name: "January",
			trips: 5500,
		},
		{
			name: "February",
			trips: 2470,
		},
		{
			name: "March",
			trips: 2000,
		},
		{
			name: "April",
			trips: 2780,
		},
		{
			name: "May",
			trips: 3015,
		},
		{
			name: "June",
			trips: 4100,
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
