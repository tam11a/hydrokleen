import React from "react";

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
			<div className="grid grid-cols-5 p-6 gap-3 bg-primary-50 border border-primary-100 my-6  mt-28 rounded">
				<div className="row-span-2 col-span-5 lg:col-span-2 px-7 relative">
					<img
						src="/offer.svg"
						className="absolute h-full w-auto bottom-0 left-0 drop-shadow-md"
					/>
					<h2 className="text-4xl font-bold  text-end mt-9 text-slate-700">
						Special <br />
						<span className="text-primary-600">Offers</span>
					</h2>
					<p className="text-lg font-semibold text-slate-600 text-end mb-9 mt-3">
						Our best offers for you
					</p>
				</div>
				{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				{offers.map((offer: any, index: number) => (
					<div
						key={index}
						className={`${
							index === 0
								? "row-span-2 col-span-5 md:col-span-3 lg:col-span-2 md:flex md:flex-col md:justify-evenly md:px-8 md:gap-3 md:py-7"
								: "col-span-5 md:col-span-2 lg:col-span-1"
						} bg-white shadow-lg rounded-md p-4`}
					>
						<h4 className={`text-xl font-bold`}>{offer?.title}</h4>
						<p
							className={`${
								index === 0
									? "text-sm md:text-2xl text-slate-500 md:text-black font-semibold md:font-bold"
									: "text-slate-500 font-semibold text-sm"
							}`}
						>
							<span
								className={`text-orange-600  ${
									index === 0 ? "text-lg md:text-5xl" : "text-lg"
								} mr-1`}
							>
								{offer?.amount}%
							</span>
							{index === 0 ? <br className="hidden md:inline" /> : ""}
							Discount
						</p>
						<p className="text-sm text-slate-700">{offer?.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Offers;
