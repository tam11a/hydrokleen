import { Button } from "antd";
import React from "react";
import { FaReadme } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiHandCoinFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";

const About: React.FC = () => {
	const missions = [
		{
			title: "Trusted",
			description:
				"Each of our HYDROKLEEN Experts works with honesty and dedication. We provide every AC service in the light of ethics.",
			icon: <VscWorkspaceTrusted />,
		},
		{
			title: "Fair Prices",
			description:
				"We have no hidden charge. We charge according to the type of service. We don't charge any extra amount.",
			icon: <RiHandCoinFill />,
		},
		{
			title: "Fast & Responsive",
			description:
				"We work fast and accurately. We use new technology for AC Service. So, we can save your valuable time and make it simple.",
			icon: <FaShippingFast />,
		},
		{
			title: "Satisfaction Guaranteed",
			description:
				"Our experts give exceptional technical care and superior customer service. Our advanced and quality ac service surely satisfy you.",
			icon: <MdOutlineSentimentVerySatisfied />,
		},
	];
	return (
		<>
			<h2 className="text-5xl text-slate-700 font-bold text-center mt-9">
				Welcome to <br />
				<span className="text-primary-600 text-4xl ">
					HydroKleen Bangladesh
				</span>
			</h2>
			<div className="grid grid-cols-7 max-w-6xl mx-auto mt-20 gap-9">
				<div className="col-span-7 md:col-span-3">
					<img
						src="/about/1.jpg"
						className="w-full h-auto rounded-md shadow-lg mb-6"
					/>
				</div>
				<div className="col-span-7 md:col-span-4 [&>div>span]:font-bold [&>div>span]:text-primary ">
					<div className="text-lg">
						<span>HydroKleen Bangladesh</span> (a franchise of{" "}
						<span>
							<Link
								to={"https://hydrokleenglobal.com/"}
								target="_blank"
							>
								HydroKleen Global
							</Link>
						</span>
						, Australia and a concern of EBS Group, Bangladesh) provides a
						unique and innovative award-winning split system air conditioning
						cleaning services. We specialise in cleaning and sanitising split
						systems, window units, ceiling cassettes and even ducted units.
						After a HydroKleen, your air would be fresh and healthy, reducing
						sickness and helping you live a healthier life. This is because air
						conditioners can harbour a variety of organisms such as mould,
						mildew, fungi, bacteria and human DNA, skin cells [if not regularly
						cleaned]. Our cleaning agents and cleaning process have been
						exclusively approved by the National Asthma Council Australia's
						Sensitive Choice Program.
					</div>

					<p className="mt-9 mb-3 text-2xl font-bold text-primary-700">
						Our services are proven to:
					</p>
					<ul className="list-disc px-4 list-inside text-lg font-semibold">
						<li>Eliminate a range of contaminants.</li>
						<li>Significantly improve air quality.</li>
						<li>Reduce power consumption.</li>
					</ul>
					<div className="p-4">
						<Link to="https://hydrokleenglobal.com/">
							<Button
								type="primary"
								size="large"
								className="bg-primary hover:!bg-primary-700 !rounded-full flex items-center"
								icon={<FaReadme className="text-xl" />}
							>
								Know More
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<h2 className="text-4xl text-slate-700 font-bold text-center mt-20">
				Our Mission <span className="text-primary-600">& Values</span>
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 mt-12">
				{missions.map((mission) => (
					<div className="bg-white rounded-md shadow-lg p-5 border-b-white hover:scale-[102%] cursor-pointer border-b-2 hover:border-b-orange-600 hover:rounded-b-none transition duration-100 ">
						<div className="w-fit text-3xl p-2 rounded-md bg-primary-50 text-primary-800 border border-primary-200">
							{mission.icon}
						</div>
						<h3 className="text-lg font-bold mt-3 mb-2">{mission.title}</h3>
						<p className="text-base">{mission.description}</p>
					</div>
				))}
			</div>
			<h2 className="text-4xl text-slate-700 font-bold text-center mt-20">
				Key <span className="text-primary-600">Achievements</span>
			</h2>
			<div className="grid grid-cols-7 max-w-7xl mx-auto mt-12 gap-9">
				<div className="col-span-7 lg:col-span-2 rounded-md lg:rounded-full border border-primary-100  bg-primary-50 p-10 flex flex-row lg:flex-col items-center justify-center lg:max-w-[280px] gap-20">
					<img
						src="/about/3.png"
						className="w-[90%] h-auto max-w-[140px] lg:max-w-[200px]"
					/>
					<img
						src="/about/2.png"
						className="w-[90%] h-auto max-w-[140px] lg:max-w-[200px]"
					/>
				</div>
				<div className="col-span-7 lg:col-span-5 [&>div>span]:font-bold [&>div>span]:text-primary">
					<ul className="list-disc list-inside text-lg p-4 [&>li]:mb-6 [&>li>b]:text-primary">
						<li>
							HydroKleen Cleaning products and processes are exclusively
							approved by the{" "}
							<b>
								National Asthma Council Australia's sensitive choice program
							</b>
						</li>
						<li>
							HydroKleen Technicians are{" "}
							<b>ACWWA Certified Wet Wash specialists and Hygiene Assessors</b>
						</li>
						<li>
							Around 5 years of serving Twenty thousands more people reputedly
							throughout the whole country
						</li>
						<li>
							Holding leading position in the design and manufacture of ductless
							air conditioning cleaning equipment
						</li>
						<li>
							Original and best HVAC cleaning equipment and licensing system
						</li>
						<li>World leading Hygiene Best Practice Standards</li>
						<li>
							Specialised virtual training in ductless HVAC cleaning and
							business systems
						</li>
						<li>Continual and extensive ongoing Research & Development</li>
						<li>Globally branded in over 45 countries</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default About;
