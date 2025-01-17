import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import { CiMenuBurger } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { navs } from "../constants";
import Logo from "../Logo";

//additional css

import "./index.css";

interface topbarProps {
	isTopOfPage: boolean;
}

const TopBar = ({ isTopOfPage }: topbarProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const { pathname } = useLocation();
	const locationInApp = pathname.split("/")[1];

	return (
		<>
			<nav className="sticky top-0 " style={{ zIndex: 10000 }}>
				<div className="topbar-clip">
					<div
						className={`${isTopOfPage && isAboveMediumScreens
								? "bg-[rgb(255,255,255)] "
								: "bg-[rgb(138,93,61)] text-white"
							} topbar-clip-container flex py-2 mx-auto justify-between items-center   ${isAboveMediumScreens && locationInApp === "" ? "  " : " "
							}  shadow-sm px-6  w-full  ${!isAboveMediumScreens ? " justify-between " : ""
							}`}>
						{isAboveMediumScreens ? (
							<React.Fragment>
								<Logo />

								<NavBar
									isTopOfPage={isTopOfPage}
									setIsMenuToggeled={setIsMenuToggled}
									items={navs}
								/>
								{/* {<SocialLinks />} */}
								{/* <div className="flex gap-2 ">
									<a
										href="https://forms.gle/SzkZpZ5VhPfHPsHy8"
										target="_blank"
										className="px-4 rounded-[4px] py-3 text-white bg-primary-chocolate">
										Register for the next intake
									</a>
									<Link
										to="ksbacatering"
										className="px-4 rounded-[4px] font-bold  py-3 bg-white text-primary-chocolate">
										Get catering services
									</Link>
								</div> */}
							</React.Fragment>
						) : (
							<CiMenuBurger
								className="w-5 h-5 mx-2 "
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							/>
						)}
						{!isAboveMediumScreens && isMenuToggled && (
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								className="fixed top-0 right-0 z-40 w-[100vw] min-h-screen bg-light-chocolate  drop-shadow-xl">
								{/* CLOSE ICON */}
								<div className="flex justify-between p-12">
									<Logo />
									<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
										<HiXMark className="w-6 h-6 text-gray-400" />
									</button>
								</div>

								<NavBar
									isTopOfPage={isTopOfPage}
									setIsMenuToggeled={setIsMenuToggled}
									items={navs}
								/>
							</motion.div>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default TopBar;
