import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			primary: {
				50: '#ECEDF8',
				100: '#DADBF1',
				200: '#B8BBE5',
				300: '#9397D7',
				400: '#7177CB',
				500: '#4D54BE',
				600: '#39409D',
				700: '#2A2F74',
				800: '#1D204E',
				900: '#0E0F25',
				950: '#070813'
			},
			neutral: {
				50: '#FFFFFF',
				100: '#E7E7E7',
				200: '#D1D1D1',
				300: '#B0B0B0',
				400: '#888888',
				500: '#6D6D6D',
				600: '#5D5D5D',
				700: '#4F4F4F',
				800: '#454545',
				900: '#404040',
				950: '#2E2E2E'
			}
		}
	},
	plugins: []
};
export default config;
