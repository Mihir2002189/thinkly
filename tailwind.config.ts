
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#1e1357', // Deep Purple
					bg: '#212048',      // Dark Indigo
					slate: '#1f1e46',   // Slate Purple
					midnight: '#1d1d43',// Midnight Blue
				},
				gradient: {
					pink: '#ec407a',    // Bright Pink (Top Gradient)
					orange: '#f57c00',  // Orange Accent
					coral: '#ff7043',   // Coral Orange
					purple: '#9c27b0',  // Purple Accent
					indigo: '#3f51b5',  // Indigo Accent
					cyan: '#00bcd4',    // Cyan Light Accent
				},
				card: {
					dark: '#2c2f4a',   // Card Background Dark
					hover: '#3a3f63',  // Hover State
					light: '#4a4e7a',  // Lighter Section
				},
				text: {
					DEFAULT: '#ffffff', // Main text
					secondary: '#b0b3c7', // Light Gray
					highlight: '#ec407a', // Highlight text (Pink)
				},
			},
			backgroundImage: {
				'main-gradient': 'linear-gradient(135deg, #ec407a, #f57c00, #ff7043, #9c27b0, #3f51b5, #00bcd4)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			backdropBlur: {
				xs: '2px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
