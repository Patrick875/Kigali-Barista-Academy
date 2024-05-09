import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { navItem } from "./types";
import useMediaQuery from "../Hooks/useMediaQuery";

interface navbarProps {
	items: navItem[];
	isTopOfPage: boolean;
	setIsMenuToggeled: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ items, setIsMenuToggeled }: navbarProps) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px");
	const [isDown, setIsDown] = useState<boolean>(false);

	return (
		<div className="">
			{!isAboveMediumScreens && (
				<div className="flex flex-col w-full gap-2 font-bold ">
					<div className="ms-4">
						{items.map((item: navItem) =>
							!item.subnavs ? (
								<Link
									onClick={() => {
										setIsMenuToggeled((prev) => !prev);
									}}
									className="block px-2 py-2 text-lg font-bold hover:bg-slate-200 hover:border-b-primary-orange hover:border-bottom-1"
									key={item.text}
									to={item.to}>
									{item.text}
								</Link>
							) : (
								<div className=" group">
									<p
										className={`flex items-center gap-6 px-2 py-2 font-bold capitalize cursor-pointer group-hover:border-b-primary-orange hover:border-bottom-1`}
										key={crypto.randomUUID()}
										onClick={() => setIsDown((prev) => !prev)}>
										{item.text}
										{!isDown ? <FaAngleDown /> : <FaAngleUp />}
									</p>
									<motion.div
										initial={{ x: -20 }}
										animate={isDown ? { x: 0 } : { x: -20 }}
										transition={{ delay: 0.4, duration: 0.5 }}
										exit={{ x: -20, opacity: 0 }}
										className={`${
											isDown ? "block" : "hidden"
										} p-3 bg-slate-100`}>
										{item.subnavs.map((item) => (
											<Link
												onClick={() => {
													setIsDown((prev) => !prev);
												}}
												className="block px-4 py-2 font-bold hover:bg-slate-200 hover:cursor-pointer hover:border-b-primary-orange hover:border-bottom-1"
												key={crypto.randomUUID()}
												to={item.to}>
												{item.title}
											</Link>
										))}
									</motion.div>
								</div>
							)
						)}
					</div>

					<div className="flex justify-center w-full my-4">
						<SocialLinks />
					</div>
				</div>
			)}
			{isAboveMediumScreens && (
				<div className="flex items-center gap-3">
					{items.map((item: navItem) =>
						!item.subnavs ? (
							<Link
								className=" font-bold transition-hover duration-150 py-2  text-center  hover:border-b-primary-orange hover:border-b-[1.5px]"
								key={item.text}
								to={item.to}>
								{item.text}
							</Link>
						) : (
							<div className="relative group">
								<p
									className="py-2 font-bold text-center capitalize cursor-pointer group-hover:border-b-primary-orange hover:border-bottom-1"
									key={item.text}>
									{item.text}
								</p>
								<div className="absolute z-50 hidden p-3 group-hover:block bg-slate-100">
									{item.subnavs.map((item) => (
										<Link
											className="block px-2 py-2 font-bold hover:bg-slate-200 hover:cursor-pointer hover:border-b-primary-orange hover:border-bottom-1"
											key={crypto.randomUUID()}
											to={item.to}>
											{item.title}
										</Link>
									))}
								</div>
							</div>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default NavBar;
