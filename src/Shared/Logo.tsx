import { Link } from "react-router-dom";
import logo from "./../assets/Logo.png";
function Logo() {
	return (
		<Link className="block " to="">
			<div className="flex flex-col items-center gap-2">
				<img
					loading="lazy"
					className="block w-20 h-20"
					src={logo}
					alt="KSB-logo"
				/>
				{/* {<p className="text-lg font-bold text-primary-orange">
					The Kigali Specialist Baristas
				</p>} */}
			</div>
		</Link>
	);
}

export default Logo;
