import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

function AnimatePage({ children }: Props) {
	const animations = {
		initial: { opacity: 0, y: 100 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 100 },
	};
	return (
		<motion.div
			className="w-full p-0 m-0 "
			variants={animations}
			transition={{ duration: 1 }}
			initial="initial"
			exit="exit"
			animate="animate">
			{children}
		</motion.div>
	);
}

export default AnimatePage;
