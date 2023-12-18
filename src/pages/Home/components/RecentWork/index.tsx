import React from "react";

const RecentWork: React.FC = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-7 items-center gap-6 mt-20">
				<div className="col-span-7 lg:col-span-3">
					<h2 className="text-4xl text-center text-slate-700 font-bold  mt-9 lg:text-right">
						Recent <span className="text-primary-600">Works</span>
					</h2>
					<p className="text-lg font-semibold text-slate-600 text-center mb-4 mt-1 lg:text-right">
						Explore Our Recent Works
					</p>
					<p className="max-w-2xl [&>span]:text-primary-600 text-base text-slate-600 [&>span]:font-semibold my-3 text-center lg:text-right mx-auto  lg:mr-0">
						<span>Hydrokleen Bangladesh</span> is a leading AC Servicing, AC
						Repairing & Maintenance, AC Installation & Shifting, and AC Supply
						company in Bangladesh. We have already completed{" "}
						<span>2k+ corporate projects</span> and <span>120 projects</span>{" "}
						are running. We have an expert team and well-known engineers. Our
						clients are Hospitals, Group of companies, Markets, Bank,
						Multinational Organisation, University, Government project, Tender
						Work, and so on. Here are some of our recently completed projects.
					</p>
				</div>
				<div className="grid grid-cols-2 col-span-7 lg:col-span-4 gap-2 max-w-4xl mx-auto mt-7">
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
			</div>
		</>
	);
};

export default RecentWork;
