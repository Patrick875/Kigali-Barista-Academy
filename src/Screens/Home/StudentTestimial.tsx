import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { studentTest } from "../../Shared/types";
import parse from "html-react-parser";

function StudentTestimial({ text, img, footer, name }: studentTest) {
	return (
		<div className="mt-4 relative min-h-[60vh] md:flex md:overlap-grid gap-4 ">
			<div className="min-h-[40vh] md:w-1/2 overlap-img rounded-[12px] ">
				<img
					className="block h-[40vh] w-full md:object-contain rounded-[8px]   mx-auto"
					src={img}
				/>
			</div>
			<div className="overlap-text md:w-1/2 min-h-[40vh]">
				<p className="text-lg ">{name}</p>
				<BiSolidQuoteAltLeft className="!px-0 py-2 text-6xl" />

				<p className="pt-4 font-bold ">{parse(text)}</p>
				<p className="pt-6 font-semibold">{parse(footer)}</p>
			</div>
		</div>
	);
}

export default StudentTestimial;
