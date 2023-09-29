/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {},
		minWidth: {
			portcard: "300px",
		},
		maxWidth: {
			"1/3": "33%",
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
		darkTheme: "dark",
	},
};
