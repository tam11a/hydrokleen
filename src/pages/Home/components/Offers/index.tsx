import React from "react";
import { Link } from "react-router-dom";

const Offers: React.FC = () => {
	const offers = [
		{
			title: "Regular Servicing Savings Offer!",
			amount: 20,
			description: "Enjoy 20% Discount on the Regular Price of AC Servicing.",
		},
		{
			title: "Ramadan Savings Offer!",
			amount: 40,
			description: "Get upto 40% Discount on AC Servicing.",
		},
		{
			title: "Summer Savings Offer!",
			amount: 30,
			description: "Get upto 30% Discount on AC Servicing.",
		},
	];
	return (
		<>
			<div className="grid grid-cols-4 p-6 gap-3">
				<div className="row-span-2 px-7">
					<h2 className="text-3xl font-bold  text-end mt-9">
						Special <br />
						<span className="text-primary-600">Offers</span>
					</h2>
					<p className="text-sm font-semibold text-slate-600 text-end mb-9 mt-3">
						Our best offers for you
					</p>
				</div>
				{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{offers.map((offer: any, index: number) => (
					<div
						key={index}
						className={`${
							index === 0
								? "row-span-3 flex flex-col justify-evenly px-8 gap-3 py-7"
								: "col-span-1"
						} bg-white shadow-lg rounded-md p-4`}
					>
						<h4 className={`text-xl font-bold`}>{offer?.title}</h4>
						<p
							className={`${
								index === 0
									? "text-2xl font-bold"
									: "text-slate-500 font-semibold text-sm"
							}`}
						>
							<span
								className={`text-orange-600  ${
									index === 0 ? "text-4xl" : "text-lg"
								}`}
							>
								{offer?.amount}%
							</span>{" "}
							Discount
						</p>
						<p className="text-sm text-slate-700">{offer?.description}</p>
					</div>
				))}
				<div className="row-span-2 shadow-lg col-span-2 bg-white rounded-md flex flex-row items-center justify-center font-semibold underline underline-offset-2">
					<Link to="/offers">See All Offers</Link>
				</div>
			</div>
		</>
	);
};

export default Offers;
