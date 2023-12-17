import React from "react";

const RecentWork: React.FC = () => {
	return (
		<>
			<h2 className="text-3xl text-center font-bold  mt-9">
				Recent <span className="text-primary-600">Works</span>
			</h2>
			<p className="text-sm font-semibold text-slate-600 text-center mb-4 mt-1">
				Explore Our Recent Works
			</p>
			<p className="max-w-2xl [&>span]:text-primary-600 text-sm text-slate-600 [&>span]:font-semibold my-3 text-center mx-auto">
				<span>Hydrokleen Bangladesh</span> is a leading AC Servicing, AC
				Repairing & Maintenance, AC Installation & Shifting, and AC Supply
				company in Bangladesh. We have already completed{" "}
				<span>2k+ corporate projects</span> and <span>120 projects</span> are
				running. We have an expert team and well-known engineers. Our clients
				are Hospitals, Group of companies, Markets, Bank, Multinational
				Organisation, University, Government project, Tender Work, and so on.
				Here are some of our recently completed projects.
			</p>
			<div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto mt-7">
				<div>
					<img
						className="shadow h-full max-w-full object-cover rounded-lg"
						src="/recent/1.jpg"
					/>
				</div>
				<div>
					<img
						className="shadow h-full max-w-full object-cover rounded-lg"
						src="/recent/2.jpg"
					/>
				</div>
				<div>
					<img
						className="shadow h-full max-w-full object-cover rounded-lg"
						src="/recent/3.jpg"
					/>
				</div>
				<div>
					<img
						className="shadow h-full max-w-full object-cover rounded-lg"
						src="/recent/4.jpg"
					/>
				</div>
			</div>
		</>
	);
};

export default RecentWork;
