//jshint esversion:9
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
function BackButton() {
	const navigate = useNavigate();

	return (
		<button
			className="flex items-center gap-2 px-4 py-1 mb-2 font-medium bg-orange-900 shadow-lg rounded-[4px] text-slate-100"
			onClick={() => navigate(-1)}>
			<HiOutlineArrowLeftCircle className="text-2xl text-white" />
			Back
		</button>
	);
}

export default BackButton;
