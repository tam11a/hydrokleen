import React from "react";

const Portfolio: React.FC = () => {
	return (
		<div>
			<h2 className="text-4xl text-slate-700 font-bold  text-center mt-9">
				Our <span className="text-primary-600">Clients</span>
			</h2>
			<p className="text-lg font-semibold text-slate-600 text-center mb-9 mt-3 max-w-xl mx-auto">
				We have already completed 2K+ corporate projects. Our clients are
				Hospitals, Group of companies, Markets, Bank, Multinational
				Organisation, University, Government project, Tender Work, and so on.
				Here are some of our major clients
			</p>
			<div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 max-w-7xl mx-auto gap-4">
				{[...Array(38).keys()].map((client) => (
					<img
						key={client}
						src={`/clients/${client + 1}.png`}
						className="w-full aspect-square rounded-md shadow-lg object-contain p-2 border hover:scale-105 cursor-pointer transition duration-300"
					/>
				))}
			</div>
			<h2 className="text-4xl text-slate-700 font-bold text-center my-20">
				Working <span className="text-primary-600">Portfolio</span>
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl my-8 mx-auto gap-3">
				{[...Array(15).keys()].map((client) => (
					<img
						key={client}
						src={`/working-portfolio/${client}.jpg`}
						className="w-full h-auto rounded-md shadow-lg object-contain border hover:scale-105 cursor-pointer transition duration-300"
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
