import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialLinks() {
	return (
		<div className="flex items-center gap-6 ">
			<FaInstagram className="text-2xl" />
			<FaSquareXTwitter className="text-2xl" />
			<FaFacebook className="text-2xl" />
		</div>
	);
}

export default SocialLinks;
