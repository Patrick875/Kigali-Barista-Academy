import { clientTest, navItem, social, studentTest } from "../Shared/types";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import testimonial2 from "../assets/Testimonial2.jpg";
import testimonial3 from "../assets/Testimonial3.jpg";

export const navs: navItem[] = [
	{
		text: "Home",
		to: "",
	},

	{
		text: "KSB Academy",
		to: "ksbacademy",
	},
	{
		text: "Student Portfolios",
		to: "students",
	},
	{
		text: "Success Stoies",
		to: "success-stories",
	},
	{
		text: "KSB catering",
		to: "ksbcatering",
	},

	{
		text: "Contact us",
		to: "contactus",
	},
];
export const dashNavs: navItem[] = [
	{
		text: "Portfolios",
		to: "",
	},
	{
		text: "Success Stories",
		to: "success-stories",
	},

];
export const socials: social[] = [
	{
		name: "TikTok",
		link: "https://www.tiktok.com/@kba250?_t=8m2hae5SOmM&_r=",
		icon: <FaTiktok className="text-2xl" />,
	},
	{
		name: "instagram",
		link: "https://www.instagram.com/kigali_barista_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
		icon: <FaInstagram className="text-2xl" />,
	},
	{
		name: "Twitter/X",
		link: "https://twitter.com/Kgl_Barista_Aca",
		icon: <FaSquareXTwitter className="text-2xl" />,
	},
	{
		name: "YouTube",
		link: "https://youtube.com/@Kigalispecialistsbarista?si=9hk0vZLzM3CVUesD",
		icon: <FaYoutube className="text-2xl" />,
	},
];

export const studentTestimonies: studentTest[] = [
	{
		name: "R.DIANE",
		text: `<p>Merci KIGALI BARISGTA ACADEMY de m' avoir fait un bon barista. 
Tout d' abord, je n'en savais pas prus sur la connaissance du cafe. J ' etais serveuse. 
Je savais juste une tasse de cafe bien decoree, 
mais maintenant je suis un barista professionnel qui le faire et servir </p>`,
		img: testimonial2,
		footer: `<p>#MerciKBA</p>`,
	},
	{
		name: "Mr SHEMA ERIC",
		text: `Training at KIGALI BARISTA ACADEMY  was the first step towards
a successful career path. My passion in this career has earned
me recognition. 
I am more than grateful. May God continue expanding and lifting you
for mentoring people Thank you KBA !!!`,
		img: testimonial3,
		footer: `<div>
		<p>Mr SHEMA ERIC</p>
		<p>BALISTA AT KANARIN COFEE SHOP (KICUKIRO)</p>
		</div>
`,
	},
];
export const clientTestimonies: clientTest[] = [
	{
		text: `<p>KBS was recommended to me by a cousin who had worked with one of them as a barista, he told me they would do a great job and they indeed delivered an exceptional service at our wedding! Such a dynamic, professional and welcoming group of people! They've now become our go to “hot drinks” number 1 service provider for all our family & friends' events. Exceptional service at an affordable price. Definitely recommend you book them for your next event! Thank you KBS team for your service and warming our guests' palettes with delicious drinks.</p>`,
		footer: `<div>
		<p>#ThankyouKBA</p>
		</div>`,
	},
];

