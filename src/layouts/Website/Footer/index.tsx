import { Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const WebsiteFooter: React.FC = () => {
	return (
		<div className="bg-white py-20 px-5 shadow-lg shadow-black">
			<div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-5">
				<div className="col-span-2 md:col-span-1">
					<img
						src="/logo.png"
						className="w-auto h-[70px]"
					/>
				</div>
				<div>
					<h3 className="font-bold uppercase mb-2 text-primary-700">
						Services
					</h3>
					<ul className="[&>*]:my-1">
						<li>
							<Link
								to="/services/ac-servicing"
								className="text-sm"
							>
								AC Servicing
							</Link>
						</li>
						<li>
							<Link
								to="/services/ac-repairing-maintenance"
								className="text-sm"
							>
								AC Repairing & Maintenance
							</Link>
						</li>
						<li>
							<Link
								to="/services/ac-installation-shifting"
								className="text-sm"
							>
								AC Installation & Shifting
							</Link>
						</li>
						<li>
							<Link
								to="/services/ac-supply"
								className="text-sm"
							>
								AC Supply
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold uppercase mb-2 text-primary-700">Blog</h3>
					<ul className="[&>*]:my-1">
						<li>
							<Link
								to="/blogs/why-ac-servicing-is-important"
								className="text-sm"
							>
								Why AC Servicing is Important?
							</Link>
						</li>
						<li>
							<Link
								to="/blogs/why-ac-servicing-is-important"
								className="text-sm"
							>
								Best AC Cleaning Service Providers in Dhaka
							</Link>
						</li>
						<li>
							<Link
								to="/services/ac-installation-shifting"
								className="text-sm"
							>
								8 AC Maintenance Tips | HydroKleen Bangladesh
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold uppercase mb-2 text-primary-700">Contact</h3>
					<ul className="[&>*]:my-1">
						<li>
							<Link
								to="tel:+8801902464646"
								className="text-sm"
							>
								01902-464646
							</Link>
						</li>
						<li>
							<Link
								to="mailto:service@hydrokleen.com.bd"
								className="text-sm"
							>
								service@hydrokleen.com.bd
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<Divider className="mt-16" />
			<p className="text-xs mx-auto text-center">
				&copy; Hydrokleen {new Date().getFullYear()} - All rights reserved
			</p>
		</div>
	);
};

export default WebsiteFooter;
