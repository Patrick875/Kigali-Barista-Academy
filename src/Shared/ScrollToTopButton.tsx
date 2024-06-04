import { motion } from "framer-motion";
import { useState } from "react";
import { MdMessage, MdOutlineClose } from "react-icons/md";
import { socials } from "./constants";
import { social } from "./types";

function ScrollToTopButton() {
	const [viewContacts, setViewContacts] = useState(false);
	const handleViewContacts = () => {
		setViewContacts(!viewContacts);
	};
	const iconVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	};
	const buttonVariants = {
		initial: { scale: 1 },
		hover: { scale: 1.1 },
		tap: { scale: 0.9 },
	};
	return (
		<motion.button
			variants={buttonVariants}
			initial="initial"
			whileHover="hover"
			whileTap="tap"
			onClick={handleViewContacts}
			style={{ zIndex: 10000 }}
			className="fixed bottom-0 w-16 rounded-lg right-2 ">
			{viewContacts &&
				socials.map((soc: social) => (
					<div className="flex flex-col items-center w-16">
						<motion.a
							key={crypto.randomUUID()}
							href={soc.link}
							variants={iconVariants}
							transition={{ duration: 0.5 }}
							target="_blank"
							className="block px-2 md:py-5 md:px-0 md:gap-4">
							{soc.icon}
						</motion.a>
					</div>
				))}
			<div className="flex items-center justify-center w-12 h-12 mx-auto rounded-xl bg-light-chocolate">
				<div className="flex items-center justify-between ">
					{viewContacts ? (
						<motion.button
							initial={{ opacity: 0, rotate: -180 }}
							animate={{ opacity: 1, rotate: 0 }}
							exit={{ opacity: 0, rotate: 180 }}
							transition={{ duration: 0.5 }}>
							<MdOutlineClose className="block w-8 h-8 text-white rounded-full" />
						</motion.button>
					) : (
						<motion.button
							key="whatsapp"
							initial={{ opacity: 0, rotate: 180 }}
							animate={{ opacity: 1, rotate: 0 }}
							exit={{ opacity: 0, rotate: -180 }}
							transition={{ duration: 0.5 }}>
							<MdMessage className="block w-8 h-8 text-white rounded-full" />
						</motion.button>
					)}
				</div>
			</div>
		</motion.button>
	);
}

export default ScrollToTopButton;
