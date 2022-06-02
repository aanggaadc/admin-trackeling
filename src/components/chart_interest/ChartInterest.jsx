import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";
import "./chartInterest.scss";

function ChartInterest() {
	const data = [
		{
			subject: "Food",
			A: 66,
		},
		{
			subject: "Music",
			A: 100,
		},
		{
			subject: "Sport",
			A: 55,
		},
		{
			subject: "Photography",
			A: 73,
		},
		{
			subject: "Movie",
			A: 95,
		},
	];

	return (
		<div className="chart-interest">
			<div className="title">User Interest</div>
			<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={600} data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis />
				<Tooltip />
				<Radar name="interest" dataKey="A" stroke="#188cbd" fill="#25abe3" fillOpacity={0.6} />
			</RadarChart>
		</div>
	);
}

export default ChartInterest;
