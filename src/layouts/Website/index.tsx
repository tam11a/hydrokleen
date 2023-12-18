import React, { lazy, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [location.pathname]);
	return (
		<>
			<WebsiteHeader />
			<main className="bg-slate-100 min-h-[80vh] pt-5 pb-20 px-3 max-w-[95vw] mx-auto">
				<Outlet />
			</main>
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
