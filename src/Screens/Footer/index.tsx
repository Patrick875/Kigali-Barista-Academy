import { Link } from "react-router-dom";
import { navs, socials } from "../../Shared/constants";
import { navItem, social } from "../../Shared/types";
import logo from "../../assets/Logo.png";

function Footer() {
	return (
		<div className=" font-nunito text-white w-full min-h-[68vh] bg-[rgb(138,93,61)]">
			<div className="w-11/12 mx-auto min-h-[60vh]  md:text-lg">
				<div className="flex flex-col justify-center min-h-[60vh] ">
					<div className="gap-4 text-xl md:flex">
						<div className="flex-1">
							<Link className="block " to="">
								<div className="">
									<div className="flex flex-col items-center">
										<img
											loading="lazy"
											className="block w-20 h-20"
											src={logo}
											alt="KSB-logo"
										/>
										<p className=" text-primary-orange">
											The Kigali Specialist Baristas
										</p>
									</div>
									<p className="mt-2 font-bold text-center">FELL THE PASSION</p>
								</div>
							</Link>
						</div>
						<div className="flex-1">
							<p className="pt-2 pb-3 font-bold text-center md:pt-4 md:pb-6 md:text-left ">
								Navigation
							</p>
							{navs.map((nav: navItem) => (
								<Link
									key={crypto.randomUUID()}
									className="block py-1 text-center md:py-4 md:text-left"
									to={nav.to}>
									{nav.text}
								</Link>
							))}
						</div>

						<div className="pt-4 pb-6 flex-2">
							<p className="pb-6 font-bold text-center md:text-left">
								Contact us
							</p>
							<p className="my-6 font-light text-center md:text-left">
								Location : KG 181 St, Kigali{" "}
							</p>
							<p className="my-6 font-light text-center md:text-left">
								Email : kigalispecialistsbaristaltdkbc@gmail.com{" "}
							</p>
							<p className="my-6 font-light text-center md:text-left">
								Tel : +250 784 254 440{" "}
							</p>
							<p className="my-6 font-light text-center md:text-left">
								Tel : +250 786 525 895{" "}
							</p>
							<div className="flex flex-col items-center gap-4 px-0 py-0 mx-0 my-0 md:flex-row ">
								{socials.map((soc: social) => (
									<a
										key={crypto.randomUUID()}
										href={soc.link}
										target="_blank"
										className="flex gap-2 px-2 md:py-5 md:px-0 md:gap-4">
										{soc.icon}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center px-6  min-h-[8vh] bg-[rgb(115,77,50)]  ">
				<div className="justify-between text-center md:flex">
					<p className="">
						&copy; {new Date().getFullYear()} Kigali Specialist Barista Academy
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
