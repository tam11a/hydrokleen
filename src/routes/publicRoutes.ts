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
		path: PUBLIC_ROUTES.NOTFOUND,
		Component: lazy(() => import("@pages/NotFound")),
	},
];
