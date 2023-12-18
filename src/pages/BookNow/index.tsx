import { IconButton } from "@mui/material";
import { Button } from "antd";
import React from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import { GrFacebookOption, GrLinkedinOption, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

const BookNow: React.FC = () => {
	return (
		<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-9 mt-9">
			<h1 className="text-6xl font-bold text-center md:text-left text-slate-700">
				<span className="text-primary">Book</span> <br /> Now
			</h1>
			<div className="[&>p]:my-3 [&>p>span]:font-bold [&>p>span]:text-primary text-center md:text-start">
				<p>
					<span>HydroKleen Bangladesh</span> offers comprehensive air
					conditioning servicing. We have trusted & skilled AC servicing experts
					for checkup, repairing, maintenance, installation and shifting.
				</p>
				<p>
					Give us a call and book Now or drop by anytime, we endeavor to answer
					all inquiries within <span>24 hours</span> on business days. We will
					be happy to answer your questions. Please book Now the order.
				</p>
				<div className="mt-7 flex flex-col md:flex-row items-center justify-between gap-4">
					<Link
						to="tel:+8801902464646"
						className="font-bold text-slate-700"
					>
						<span className="text-2xl text-primary">CALL US</span> <br />{" "}
						01902-464646
					</Link>
					<Link to="https://m.me/HydroKleenBD">
						<Button
							type="primary"
							size="large"
							className="bg-primary hover:!bg-primary-700 !rounded-full flex items-center"
							icon={<FaFacebookMessenger className="text-xl" />}
						>
							Messenger
						</Button>
					</Link>
				</div>
				<p className="text-slate-700 font-semibold mx-auto text-center pt-14">
					Find us on Social Media
				</p>
				<div className="text-xl flex flex-row items-center gap-3 mx-auto w-fit mb-12">
					<Link
						to={"https://www.facebook.com/HydroKleenBD"}
						target="_blank"
					>
						<IconButton
							className="!border-2 !border-solid !text-primary-600 !border-primary-100"
							aria-label="Facebook Link"
						>
							<GrFacebookOption />
						</IconButton>
					</Link>
					<Link
						to={
							"https://www.youtube.com/channel/UCEJHX65PiwufBMRrdNVvWZA/featured"
						}
						target="_blank"
					>
						<IconButton
							className="!border-2 !border-solid !text-primary-600 !border-primary-100"
							aria-label="YouTube Link"
						>
							<GrYoutube />
						</IconButton>
					</Link>
					<Link
						to={
							"https://www.linkedin.com/company/hydrokleen-bangladesh-ltd/?originalSubdomain=bd"
						}
						target="_blank"
					>
						<IconButton
							className="!border-2 !border-solid !text-primary-600 !border-primary-100"
							aria-label="Linkedin Link"
						>
							<GrLinkedinOption />
						</IconButton>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BookNow;
