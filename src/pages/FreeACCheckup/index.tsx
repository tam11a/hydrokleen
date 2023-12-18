import { Button } from "antd";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FreeACCheckup: React.FC = () => {
	return (
		<>
			<h2 className="text-3xl font-bold text-center mt-9">
				AC <span className="text-primary-600">Check-up</span>
			</h2>
			<p className="text-sm font-semibold text-slate-600 text-center mb-9 mt-3 max-w-md mx-auto">
				AC Check-Up is an important part of making sure you get long-lasting,
				and efficient performance from your Air Conditioner.
			</p>
			<div className="grid grid-cols-7 max-w-5xl mx-auto gap-5">
				<div className="col-span-7 md:col-span-3">
					<img
						src="/ac-checkup/1.jpg"
						className="w-full h-auto rounded-md shadow-lg mb-6"
					/>
				</div>
				<div className="col-span-7 md:col-span-4">
					<p className="text-2xl font-bold mb-4 mt-4">Service Booking:</p>
					<ul className="[&>li>span]:text-primary-600 [&>li>span]:font-semibold [&>li>span]:text-lg [&>li]:pb-6 text-sm">
						<li>
							<span>Free AC Check-Up Service:</span> <br /> You can enjoy Free
							AC Check-Up Service from us if you take any kind of HydroKleen AC
							Servicing in addition to this.
						</li>
						<li>
							<span>Home Check-Up Service:</span> <br /> In terms of Home
							Check-Up Service, you have to pay the Transportation Cost or
							Conveyance Charge only.
						</li>
						<li>
							<span>Corporate Check-Up Service:</span> <br /> In terms of
							Corporate Check-Up Service, you can visit our Book an Appointment
							page or Call 01902464646 for details.
						</li>
					</ul>
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
						<Link to="/free-ac-checkup">
							<Button
								type="primary"
								size="large"
								className=" bg-orange-500 hover:!bg-orange-700 flex flex-row items-center"
								icon={<BsFillTelephoneFill />}
							>
								Call Now
							</Button>
						</Link>
						<Button
							type="primary"
							size="large"
							className="flex bg-primary hover:!bg-primary-700 flex-row-reverse items-center"
							icon={<FaCircleArrowRight className="ml-3 text-xl" />}
						>
							Book Now
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FreeACCheckup;
