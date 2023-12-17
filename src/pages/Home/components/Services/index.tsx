import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const Services: React.FC = () => {
	const services = [
		{
			title: "AC Servicing",
			description:
				"We have a large team to service any kind of branded AC with the latest tools under Experienced engineers. As we are the best AC servicing company in Bangladesh, we can do servicing as per your expectation.",
			icon: <FaCircleArrowRight />,
		},
		{
			title: "AC Repairing",
			description:
				"We are committed to bringing you the best air conditioning repair services. Our experts are professional, courteous, and honest. We always try to provide an absolute AC Repairing Service.",
			icon: <FaCircleArrowRight />,
		},
		{
			title: "AC Installation",
			description:
				"We are efficient in installing AC accurately in your home or office and recommend you which place will be best for AC installation so that you can get the best performance from the air conditioner.",
			icon: <FaCircleArrowRight />,
		},
		{
			title: "AC Supply",
			description:
				"Hydrokleen is also a leading AC Supply company in Bangladesh. We offer any kind of Branded AC (depending on the availability in the market). So, you can purchase any kinds of AC from Hydrokleen Bangladesh.",
			icon: <FaCircleArrowRight />,
		},
	];

	return (
		<>
			<h2 className="text-3xl font-bold  text-center mt-9">
				Our <span className="text-primary-600">Services</span>
			</h2>
			<p className="text-sm font-semibold text-slate-600 text-center mb-9">
				We provide the following services
			</p>
			<div className="grid grid-cols-5 bg-slate-200 rounded-md">
				<div className="col-span-5 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
					{services.map((service) => (
						<div className="bg-white rounded-md shadow-lg p-5 border-b-white hover:scale-[102%] cursor-pointer border-b-2 hover:border-b-orange-600 hover:rounded-b-none transition duration-100 ">
							<div className="w-fit text-3xl p-2 rounded-md bg-primary-50 text-primary-800">
								{service.icon}
							</div>
							<h3 className="text-lg font-bold my-3">{service.title}</h3>
							<p className="text-sm">{service.description}</p>
						</div>
					))}
				</div>
				<div className="relative bg-white my-5 col-span-5 lg:col-span-2 ml-5 lg:ml-0 min-h-[350px] mr-5 rounded shadow-lg overflow-hidden">
					<iframe
						className="w-full h-full"
						src="https://www.youtube.com/embed/jO5cOfPUotw"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default Services;
