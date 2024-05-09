/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			colors: {
				"primary-chocolate": "rgba(67,32,16,0.85)",
				"light-chocolate": "rgb(67,32,16)",
				"topbar-bgcolor": "rgba(152, 112, 89)",
				"hero-cover": "rgba(255,255,255,0.58)",
				"page-cover": "rgba(0,0,0,0.68)",
			},
			backgroundImage: {
				"hero-image": "url('/images/hero.jpg')",
				"who-image": "url('/images/section2.jpg')",
				catering: "url('/src/assets/catering3.jpg')",
				"image-2":
					"url('https://esquirescoffee.co.uk/wp-content/uploads/2022/08/Barista-pulling-lever-of-manual-coffee-machine-1-1024x683.jpg')",
				"image-cohort":
					"url('https://esquirescoffee.co.uk/wp-content/uploads/2022/08/Barista-pulling-lever-of-manual-coffee-machine-1-1024x683.jpg')",
			},
			fontFamily: {
				hanuman: ["Hanuman", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
				lora: ["Lora", "serif"],
				paprika: ["Paprika", "system-ui"],
				dmSans: ["DM sans", "sans-serif"],
				nunito: ["Nunito", "sans-serif"],
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				xl: "1.25rem",
				"2xl": "1.563rem",
				"3xl": "1.953rem",
				"4xl": "2.441rem",
				"5xl": "3.052rem",
				"8xl": "5.52rem",
			},
			content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
			screens: {
				xs: "480px",
				sm: "768px",
				md: "1060px",
			},
		},
	},
	plugins: [flowbite.plugin()],
};
