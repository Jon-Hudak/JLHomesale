/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'serif':['Source Serif Pro','ui-serif']
		},
		
		extend: {
			colors: 
				{
					background: "#2C3E50",
					'backgroundLight':"#36495B",
					offWhite:"#969FA7",
					accent:"#5FCF80",
					accentDark:'#268c3e'
				},
			
		},
	},
	plugins: [],
}
