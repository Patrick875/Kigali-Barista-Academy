import { BiSolidQuoteAltLeft } from "react-icons/bi";
import parse from "html-react-parser";
import { clientTest } from "../../Shared/types";

function ClientTestimonial({ text, footer, name }: clientTest) {
	return (
		<div className="mt-4 relative rounded-[8px] p-5 bg-[rgb(255,248,241)] text-black min-h-[40vh] md:overlap-grid gap-4 ">
			<div className="text-left  min-h-[30vh]">
				<p className="text-lg italic font-semibold ">{name}</p>
				<BiSolidQuoteAltLeft className="!px-0 py-2 text-6xl" />
				<p className="pt-4 font-bold ">{parse(text)}</p>
				<p className="pt-6 font-semibold">{parse(footer)}</p>
			</div>
		</div>
	);
}

export default ClientTestimonial;
