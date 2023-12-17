import React from "react";
import CountUp from "react-countup";

const Stats: React.FC = () => {
	const stats = [
		{
			count: 20,
			prefix: "k+",
			title: "Total Servicing",
		},
		{
			count: 2,
			prefix: "k+",
			title: "Corporate Projects",
		},
		{
			count: 120,
			prefix: "",
			title: "Running Projects",
		},
		{
			count: 25,
			prefix: "",
			title: "Active Teams",
		},
	];
	return (
		<div className="bg-primary-50 border border-primary-100 my-6 rounded p-6">
			<div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="p-4 flex flex-col items-center justify-center"
					>
						<p className="text-5xl text-primary-700 font-bold text-center">
							<CountUp end={stat.count} />
							<span className="text-3xl ml-1">{stat.prefix}</span>
						</p>
						<h4 className="text-center text-sm font-bold">{stat.title}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stats;
