import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./chartGender.scss";

function ChartGender({ totalMale, totalFemale }) {
	const data = [
		{ name: "Female", value: totalFemale },
		{ name: "Male", value: totalMale },
	];

	const COLORS = ["#E56997", "#25abe3"];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		percent,
		index,
	}) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text
				x={x}
				y={y}
				fill="white"
				textAnchor={x > cx ? "start" : "end"}
				dominantBaseline="central"
			>
				{`${(percent * 100).toFixed(0)}%`} {data[index].name}
			</text>
		);
	};

	return (
		<div className="chart-gender">
			<div className="title">User by Gender</div>
			<PieChart width={400} height={400}>
				<Pie
					data={data}
					cx={200}
					cy={200}
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={150}
					fill="#8884d8"
					dataKey="value"
					isAnimationActive={false}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</div>
	);
}

export default ChartGender;
