import { lazy } from "react";
import { PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
	{
		path: PUBLIC_ROUTES.HOME,
		Component: lazy(() => import("@pages/Home")),
	},
	{
		path: PUBLIC_ROUTES.FREEACCHECKUP,
		Component: lazy(() => import("@pages/FreeACCheckup")),
	},
	{
		path: PUBLIC_ROUTES.BOOKNOW,
		Component: lazy(() => import("@pages/BookNow")),
	},
	{
		path: PUBLIC_ROUTES.CONTACT,
		Component: lazy(() => import("@pages/Contact")),
	},
	{
		path: PUBLIC_ROUTES.PORTFOLIO,
		Component: lazy(() => import("@pages/Portfolio")),
	},
	{
		path: PUBLIC_ROUTES.ABOUT,
		Component: lazy(() => import("@pages/About")),
	},
	{
		path: PUBLIC_ROUTES.OFFERS,
		Component: lazy(() => import("@pages/Offers")),
	},
	{
		path: PUBLIC_ROUTES.NOTFOUND,
		Component: lazy(() => import("@pages/NotFound")),
	},
];
