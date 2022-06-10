import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";
import "./chartInterest.scss";

function ChartInterest({ dataInterest }) {
	const data = [
		{
			subject: "Food",
			A: dataInterest.food,
		},
		{
			subject: "Music",
			A: dataInterest.music,
		},
		{
			subject: "Sport",
			A: dataInterest.sport,
		},
		{
			subject: "Photography",
			A: dataInterest.photography,
		},
		{
			subject: "Movie",
			A: dataInterest.movie,
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
