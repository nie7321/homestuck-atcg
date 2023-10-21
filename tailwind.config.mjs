/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'courier': ['courier'],
			},
			colors: {
				'lavender': '#c1c1d7',
				'green-sun': '#6FF373',
				'dark-green': '#407962',
				'web-blue': '#0000EE;'
			},
		},
	},
	plugins: [],
}
