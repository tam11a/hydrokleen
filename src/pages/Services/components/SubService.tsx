import React from "react";

const SubService: React.FC<ISubserviceSection> = ({
	headerTitle,
	description,
	services,
}) => {
	return (
		<>
			<h2 className="text-4xl text-slate-700 font-bold text-center mt-9 [&>span]:text-primary-600 mb-9">
				{headerTitle}
			</h2>
			<p className="text-lg font-semibold text-slate-600 text-center mb-9 mt-3 max-w-xl mx-auto">
				{description}
			</p>
			<div
				className={`grid grid-cols-1 md:grid-cols-2 ${
					services?.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
				} gap-7 max-w-7xl mx-auto`}
			>
				{services?.map((service: ISubservice) => (
					<div
						className="p-4"
						key={service.title}
					>
						<img
							src={service.image}
							className="rounded shadow-md mb-4"
						/>
						<h3 className="text-xl font-semibold text-slate-700 mb-4">
							{service.title}
						</h3>
						<ul className="list-outside list-disc text-sm mx-4">
							{service.summary?.map((summary: string) => (
								<li key={summary}>{summary}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default SubService;
