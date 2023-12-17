import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	return (
		<>
			<WebsiteHeader />
			<main className="bg-slate-100 min-h-[80vh] py-5 px-3 max-w-[95vw] mx-auto">
				<Outlet />
			</main>
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
