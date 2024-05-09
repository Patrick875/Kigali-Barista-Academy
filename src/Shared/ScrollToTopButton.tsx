import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { motion } from "framer-motion";

function ScrollToTopButton() {
	const [position, setPosition] = useState<number>(0);
	const handleSetToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const handleScroll = () => {
		setPosition(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<motion.button
			initial={{ x: -20, y: 20, opacity: 0 }}
			animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ delay: 0.6, duration: 0.4 }}
			onClick={handleSetToTop}
			style={{ zIndex: 10000 }}
			className={`fixed bottom-0 w-16  h-16 items-center justify-center rounded-lg right-2 mx-auto text-white bg-primary-orange    ${
				position > 20 ? " flex " : " hidden "
			}  `}>
			<div className="flex items-center justify-between ">
				<BsArrowUpCircle className="block w-8 h-8 text-black bg-white rounded-full" />
			</div>
		</motion.button>
	);
}

export default ScrollToTopButton;
