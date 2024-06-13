import React from "react";
import SocialLinks from "./SocialLinks";
import { Link, NavLink } from "react-router-dom";
import { navItem } from "./types";
import useMediaQuery from "../Hooks/useMediaQuery";
import './additionalCss.css'
interface navbarProps {
	items: navItem[];
	isTopOfPage: boolean;
	setIsMenuToggeled: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ items, setIsMenuToggeled }: navbarProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

	return (
		<div className="">
			{!isAboveMediumScreens && (
				<div className="flex flex-col w-full gap-2 ">
					<div className="ms-4">
						{items.map((item: navItem) => (
							<Link
								onClick={() => {
									setIsMenuToggeled((prev) => !prev);
								}}

								className="block px-2 py-2 text-lg f hover:bg-slate-200 hover:border-b-primary-orange hover:border-bottom-1"
								key={item.text}
								to={item.to}>
								{item.text}
							</Link>
						))}
					</div>

					<div className="flex justify-center w-full my-4">
						<SocialLinks />
					</div>
				</div>
			)}
			{isAboveMediumScreens && (
				<div className="flex items-center gap-3">
					{items.map((item: navItem) => (
						<NavLink
							end
							className={({ isActive }) => `${isActive ? " relative  bg-white activeTab " : ''} transition-hover duration-150 py-6  text-center px-4  hover:border-b-primary-orange hover:border-b-[1.5px]`}

							key={item.text}
							to={item.to}>
							{item.text}
						</NavLink>
					))}
				</div>
			)}
		</div>
	);
};

export default NavBar;
