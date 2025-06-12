/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
		},

		container: {
			center: true,
			padding: {
			},
		},
		screens: {
			xs: '480px',
			// => @media (min-width: 640px) { ... }

			sm: '576px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '992px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1440px'
		},
		colors: {
			black: 'black',
			white: 'white',
			transparent: 'transparent',
			current: 'currentColor',
			'primary-text': '#637381',
			'secondary-text': '#8899A8',
			'stroke': '#DFE4EA',
			'main-blue': '#1b4473',
			'secondary-blue': '#3372b9',
			'failed': '#de7070',
			'waiting': '#ae96b0',
			//dark
			'dark': '#050505',
			'dark-200': '#707070',
			'dark-300': '#4b4b4b',
			'dark-400': '#454545',
			'dark-500': '#393939',
			'dark-600': '#2f2f2f',
			'dark-700': '#272727',
			'dark-800': '#1e1e1e',
			//gary
			'gray': '#CED4DA',
			'gray-100': '#F9FAFB',
			'gray-200': '#F3F4F6',
			'gray-300': '#E5E7EB',
			'gray-400': '#DEE2E6',
			'gray-500': '#CED4DA',

		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				// headings
				'.heading-1': {
				fontFamily: "clearsans-bold",
				fontSize: '104px',
				lineHeight: '84px',
				},
				'.heading-3': {
				fontFamily: "clearsans-bold",
				fontSize: '84px',
				lineHeight: '72px',
				},
				'.heading-6': {
				fontFamily: "clearsans-bold",
				fontSize: '24px',
				lineHeight: '30px',
				},
				// text large
				'.text-lg-r': {
					fontFamily: 'clearsans-regular',
					fontSize: '17px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '16px',
					}
				},
				'.text-lg-m': {
					fontFamily: 'clearsans-medium',
					fontSize: '17px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '16px',
					}
				},
				'.text-lg-b': {
					fontFamily: 'clearsans-bold',
					fontSize: '17px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '16px',
					}
				},
				// text medium
				'.text-md-r': {
					fontFamily: 'clearsans-regular',
					fontSize: '15px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '14px',
					}
				},
				'.text-md-m': {
					fontFamily: 'clearsans-medium',
					fontSize: '15px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '14px',
					}
				},
				// text small
				'.text-sm-r': {
					fontFamily: 'clearsans-regular',
					fontSize: '13px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '12px',
					}
				},
				'.text-sm-m': {
					fontFamily: 'clearsans-medium',
					fontSize: '13px',
					lineHeight: '24px',
					'@media (max-width: 576px)': {
						fontSize: '12px',
					}
				},
				// text extra small
				'.text-xs-r': {
					fontFamily: 'clearsans-regular',
					fontSize: '11px',
					lineHeight: '20px',
					'@media (max-width: 576px)': {
						fontSize: '10px',
					}
				},
				'.text-xs-m': {
					fontFamily: 'clearsans-medium',
					fontSize: '11px',
					lineHeight: '20px',
					'@media (max-width: 576px)': {
						fontSize: '10px',
					}
				},
			})
		})
	],
}