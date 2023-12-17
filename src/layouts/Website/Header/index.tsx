import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillTelephoneFill, BsYoutube, BsLinkedin } from "react-icons/bs";
import { MdClose, MdEmail, MdMenu } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button, Divider, Menu } from "antd";

const menu = [
	{
		label: "Home",
		key: "/",
	},
	{
		label: "Services",
		key: "/services",
		children: [
			{
				label: "AC Servicing",
				key: "/services/ac-servicing",
			},
			{
				label: "AC Repairing & Maintenance",
				key: "/services/ac-repairing-maintenance",
			},
			{
				label: "AC Installation & Shifting",
				key: "/services/ac-installation-shifting",
			},
			{
				label: "AC Supply",
				key: "/services/ac-supply",
			},
		],
	},
	{
		label: "Offer",
		key: "/offers",
	},
	{
		label: "Blogs",
		key: "/blogs",
	},
	{
		label: "Portfolio",
		key: "/portfolio",
	},
	{
		label: "About",
		key: "/about",
	},
	{
		label: "Contact",
		key: "/contact",
	},
];

const WebsiteHeader: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const navigate = useNavigate();
	return (
		<>
			<AppBar className="">
				<Toolbar className="bg-primary !min-h-[0] py-1 !hidden md:!flex justify-center">
					<div className="max-w-7xl flex flex-row items-center w-full justify-between gap-3">
						<div className="flex flex-row gap-3">
							<Link
								to="tel:+8801902464646"
								className="flex flex-row text-xs items-center gap-1 text-white"
							>
								<BsFillTelephoneFill />
								<span>01902-464646 (9am-7pm)</span>
							</Link>
							<Link
								to="mailto:service@hydrokleen.com.bd"
								className="flex flex-row text-xs items-center gap-1 text-white"
							>
								<MdEmail />
								<span>service@hydrokleen.com.bd</span>
							</Link>
						</div>
						<div className="flex flex-row gap-3">
							<Link to={"https://www.facebook.com/HydroKleenBD"}>
								<FaFacebookSquare />
							</Link>
							<Link
								to={
									"https://www.youtube.com/channel/UCEJHX65PiwufBMRrdNVvWZA/featured"
								}
							>
								<BsYoutube />
							</Link>
							<Link
								to={
									"https://www.linkedin.com/company/hydrokleen-bangladesh-ltd/?originalSubdomain=bd"
								}
							>
								<BsLinkedin />
							</Link>
						</div>
					</div>
				</Toolbar>
				<Toolbar className="bg-white">
					<div className="flex flex-row items-center gap-3 w-full max-w-7xl mx-auto">
						<Link to="/">
							<img
								src="/logo.png"
								className="w-auto h-[50px]"
							/>
						</Link>
						<Menu
							onClick={(e) => navigate(e.key)}
							selectedKeys={[]}
							mode="horizontal"
							className="hidden md:flex flex-1 border-0 min-w-[40px]"
							items={menu}
						/>
						<Button
							type="primary"
							size="large"
							className="hidden md:flex bg-orange-500 hover:!bg-orange-700"
						>
							Free AC Checkup
						</Button>
						<Button
							type="primary"
							size="large"
							className="hidden md:flex bg-primary hover:!bg-primary-700 flex-row-reverse items-center"
							icon={<FaCircleArrowRight className="ml-4" />}
						>
							Book Now
						</Button>
						<div className="flex-1 md:hidden" />
						<div className="inline-flex md:hidden">
							<IconButton onClick={() => setOpen((o) => !o)}>
								<MdMenu />
							</IconButton>
							<Drawer
								anchor="right"
								open={open}
								onClose={() => setOpen((o) => !o)}
								PaperProps={{
									className: "w-[90vw] max-w-[300px]",
								}}
							>
								<div className="p-1 px-3">
									<IconButton onClick={() => setOpen((o) => !o)}>
										<MdClose />
									</IconButton>
								</div>
								<Divider className="my-0" />
								<Menu
									onClick={(e) => {
										navigate(e.key);
										setOpen((o) => !o);
									}}
									selectedKeys={[]}
									mode="inline"
									className="border-0"
									items={menu}
								/>
							</Drawer>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<div className="h-[66px] md:h-[90px]" />
		</>
	);
};

export default WebsiteHeader;