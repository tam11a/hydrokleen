import { IconButton } from "@mui/material";
import { Button } from "antd";
import React from "react";
import { FaFacebookMessenger, FaLocationDot } from "react-icons/fa6";
import { GrFacebookOption, GrLinkedinOption, GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
	return (
		<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-9 mt-9">
			<h1 className="text-6xl font-bold text-center md:text-left text-slate-700">
				<span className="text-primary">Contact</span> <br /> HydroKleen <br />{" "}
				Bangladesh
			</h1>
			<div className="[&>p]:my-3 [&>p>span]:font-bold [&>p>span]:text-primary text-center md:text-start">
				<p>
					We offer <span>Expert service</span> to all of our customers. You can
					always count on Hydrokleen Experts to reach out to you as soon as
					possible. We use professional equipment to find the source of your air
					conditioning problems and fix them.
				</p>

				<div className="w-full bg-white p-5 rounded-xl shadow-lg mt-7">
					<div className="mb-6">
						<p className="text-2xl flex flex-row items-center gap-2 text-primary font-bold">
							<FaLocationDot /> Address
						</p>
						<p className="font-semibold text-slate-700 pl-8 text-sm`">
							Rangs Fortune Square, House 32 (7th & 8th Floor), Dhanmondi-2,
							Dhaka, Bangladesh, 1205.
						</p>
					</div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.234941197814!2d90.37618457589683!3d23.73899998921292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ca087128b5%3A0xa1722a58b23c4b31!2sHydroKleen%20Bangladesh%20Ltd!5e0!3m2!1sen!2sbd!4v1702879237129!5m2!1sen!2sbd"
						allowFullScreen={true}
						loading="lazy"
						className="w-full min-h-[450px] rounded-md border-2 shadow-lg"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<div className="mt-7 flex flex-col md:flex-row items-center justify-between gap-4">
					<Link
						to="tel:+8801902464646"
						className="font-bold text-slate-700"
					>
						<span className="text-2xl text-primary">Phone</span> <br />{" "}
						01902-464646 (9AM - 7PM)
					</Link>
					<Link
						to="mailto:service@hydrokleen.com.bd"
						className="font-bold text-slate-700"
					>
						<span className="text-2xl text-primary">Email</span> <br />{" "}
						service@hydrokleen.com.bd
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

export default Contact;
