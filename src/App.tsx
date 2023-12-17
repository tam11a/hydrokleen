import { ThemeProvider } from "@mui/material";
import theme from "@styles/theme";
import { ConfigProvider } from "antd";
import React from "react";
import BaseRoutes from "./routes";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: theme.palette.primary.main,
						borderRadius: 4,
						fontFamily: theme.typography.fontFamily,
					},
				}}
			>
				<BaseRoutes />
			</ConfigProvider>
		</ThemeProvider>
	);
};

export default App;
