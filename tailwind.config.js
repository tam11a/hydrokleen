/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1EA6DF",
					light: "#62c1e9",
					dark: "#15749c",
					50: "#d2edf9",
					100: "#bce4f5",
					200: "#a5dbf2",
					300: "#8fd3ef",
					400: "#78caec",
					500: "#62c1e9",
					600: "#1b95c9",
					700: "#1885b2",
					800: "#126486",
					900: "#0c4259",
				},
			},
			fontFamily: {
				sans: ["Lexend", "Noto Sans Bengali", "sans-serif"],
				serif: ["Lexend", "Noto Sans Bengali", "serif"],
			},
		},
	},
	plugins: [],
};
