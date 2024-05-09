import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import catering from "../assets/catering3.jpg";
import { BsFillTelephoneXFill } from "react-icons/bs";
import AnimatePage from "../Shared/AnimatePage";

function KsbaCatering() {
	// const images = useFetchData("/images/");

	const cateringImages: string[] = [
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163754/KBA_CATERING/We_are_the_specialists_barista_ltd_team_vm3g7h.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163754/KBA_CATERING/We_are_the_specialists_barista_ltd_team_3_k1c7xh.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163753/KBA_CATERING/Last_kigali_barista_academy_at_Isibo_talking_about_coffee_as_a_business_carrier_to_the_youth_guyz_join_us_for_ur_choice_for_the_Visio_vn0wkf.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163753/KBA_CATERING/Last_kigali_barista_academy_at_Isibo_talking_about_coffee_as_a_business_carrier_to_the_youth_guyz_join_us_for_ur_choice_for_the_Visio_1_vtqfgm.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163753/KBA_CATERING/We_are_the_specialists_barista_ltd_team_2_z6numt.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163753/KBA_CATERING/Last_kigali_barista_academy_at_Isibo_talking_about_coffee_as_a_business_carrier_to_the_youth_guyz_join_us_for_ur_choice_for_the_Visio_3_chwhmw.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163753/KBA_CATERING/Last_kigali_barista_academy_at_Isibo_talking_about_coffee_as_a_business_carrier_to_the_youth_guyz_join_us_for_ur_choice_for_the_Visio_2_jh2qgz.jpg",
	];
	return (
		<AnimatePage>
			<main className="font-nunito">
				<section className="min-h-[70vh] w-full flex flex-col relative">
					<div className="min-h-[70vh]">
						<img
							src={catering}
							className="w-full h-[70vh] object-cover object-center"
						/>
					</div>
					<div className=" absolute h-[70vh] top-0 px-6 w-full items-center bg-[rgba(255,255,255,0.8)] z-100 flex flex-col  justify-center">
						<h1 className="text-6xl font-semibold text-primary-orange font-paprika">
							KSB Catering
						</h1>
					</div>
				</section>
				<section className="w-11/12 mx-auto">
					<p className="my-8 text-xl font-bold text-center font-paprika">
						" Tailored to turn your event into memories to cherish. "
					</p>
					<p className="my-4 text-lg font-semibold text-center"> Book us at</p>
					<div className="flex justify-center">
						<div className="flex gap-4 my-3">
							<div className="rounded-[8px] p-3 flex gap-3 items-center bg-[rgb(255,248,241)]">
								<FaWhatsapp className="text-xl " />
								<div>
									<p className="font-bold">Whatsapp</p>
									<p>+250 786 525 895 / +250 784 254 440</p>
								</div>
							</div>
							<div className="rounded-[8px] p-3 flex gap-3 items-center bg-[rgb(255,248,241)]">
								<BsFillTelephoneXFill className="text-xl" />
								<div>
									<p className="font-bold">Tel</p>
									<p>+250 786 525 895 / +250 784 254 440 </p>
								</div>
							</div>
						</div>
					</div>
					<p className="my-4 text-lg font-semibold text-center"> Gallery</p>
					<div className=" py-8 grid min-h-[100vh] gap-2 md:grid-cols-3">
						{cateringImages.map((img, index) => (
							<img
								alt={`img-${index}`}
								src={img}
								className="rounded-[4px] h-[40vh] object-cover w-full "
							/>
						))}
					</div>
					<div className="flex justify-center w-full my-4">
						<a
							target="_blank"
							href="https://www.instagram.com/kigali_barista_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
							className="flex items-center gap-3 px-8 py-1 font-semibold bg-white border-2 border-pink-900 rounded-full shadow-lg">
							<FaInstagram className="text-4xl" />
							View more
						</a>
					</div>
				</section>
			</main>
		</AnimatePage>
	);
}

export default KsbaCatering;
