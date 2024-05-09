import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import TopBar from "./Topbar/TopBar";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "../Screens/Footer";

const Layout = () => {
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div className="w-full " style={{ scrollBehavior: "smooth" }}>
			<div className="relative w-full ">
				<TopBar isTopOfPage={isTopOfPage} />
				<ScrollToTopButton />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
