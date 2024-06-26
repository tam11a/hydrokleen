import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		include: ["antd"],
	},
	server: {
		port: 3000,
		open: "/",
	},
	plugins: [react(), tsconfigPaths()],
});
