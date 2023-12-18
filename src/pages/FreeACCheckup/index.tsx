import { Button } from "antd";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FreeACCheckup: React.FC = () => {
	return (
		<>
			<h2 className="text-4xl text-slate-700 font-bold text-center mt-9">
				AC <span className="text-primary-600">Check-up</span>
			</h2>
			<p className="text-base font-semibold text-slate-600 text-center mb-9 mt-3 max-w-lg mx-auto">
				AC Check-Up is an important part of making sure you get long-lasting,
				and efficient performance from your Air Conditioner.
			</p>
			<div className="grid grid-cols-7 max-w-5xl mx-auto gap-9">
				<div className="col-span-7 md:col-span-3">
					<img
						src="/ac-checkup/1.jpg"
						className="w-full h-auto rounded-md shadow-lg mb-6"
					/>
				</div>
				<div className="col-span-7 md:col-span-4">
					<p className="text-3xl text-slate-700 font-bold mb-4 mt-4">
						Service Booking:
					</p>
					<ul className="[&>li>span]:text-primary-600 [&>li>span]:font-semibold [&>li>span]:text-lg [&>li]:pb-6 mt-9 text-base">
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
						<Link to="tel:+8801902464646">
							<Button
								type="primary"
								size="large"
								className=" bg-orange-500 hover:!bg-orange-700 flex flex-row items-center"
								icon={<BsFillTelephoneFill />}
							>
								Call Now
							</Button>
						</Link>
						<Link to="/book-now">
							<Button
								type="primary"
								size="large"
								className="flex bg-primary hover:!bg-primary-700 flex-row-reverse items-center"
								icon={<FaCircleArrowRight className="ml-3 text-xl" />}
							>
								Book Now
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<h2 className="text-4xl text-slate-700 font-bold text-center mt-16">
				How it <span className="text-primary-600">Works</span>
			</h2>
			<p className="text-base font-semibold text-slate-600 text-center mb-9 mt-3 max-w-lg mx-auto">
				Air Conditioner Check-Up is such an essential service that offers the
				diagnosis of your Air Conditioner by an expert technician who performs
				initial tests for problem identification.
			</p>
			<ul className="max-w-4xl mx-auto list-disc [&>li>span]:text-primary-600 [&>li>span]:font-semibold [&>li]:pb-6 px-5 text-base">
				<li>
					<span>Check for proper refrigerant levels. </span> Low levels indicate
					a leak that needs to be found and repaired immediately. Low
					refrigerant levels can burn out your compressor, resulting in the most
					costly repair when it comes to A/C, period.
				</li>
				<li>
					<span>Check all electrical components and controls</span> to make sure
					they're working properly.
				</li>
				<li>
					<span>Clean evaporator and condenser coils.</span> Dirty evaporators
					and coils reduce the energy efficiency and cooling ability of your
					unit.
				</li>
				<li>
					<span>Oil motors</span> as needed.
				</li>
				<li>
					<span>Calibrate thermostat </span> to make sure your A/C isn't working
					overtime.
				</li>
				<li>
					<span>Check the condenser</span> for any possible problems.
				</li>
				<li>
					<span>Check, clean, and/or replace filters. </span> An annual air
					conditioner check up is the easiest way to keep your air conditioner
					in top condition for years to come. To ensure you'll get worry free,
					and money saving, performance from your A/C, schedule a regular
					maintenance call today.
				</li>
			</ul>
		</>
	);
};

export default FreeACCheckup;
