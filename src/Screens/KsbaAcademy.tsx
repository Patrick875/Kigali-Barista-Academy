import { IoIosTimer } from "react-icons/io";
import academy from "../assets/academy.jpg";
import academy2 from "../assets/academy2.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { BiCloudDownload } from "react-icons/bi";
import AnimatePage from "../Shared/AnimatePage";
import { FaInstagram } from "react-icons/fa";
function KsbaAcademy() {
	const academyImages: string[] = [
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163808/KBA_ACADEMY/mushabe_alex1_was_a_pleasure_to_have_you_Sir_advices_and_skills_you_shared_to_us_will_be_a_key_to_tackle_challenges_in_our_career._We_appreciate_your_coming_._yrvoq6.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163802/KBA_ACADEMY/mushabe_alex1_was_a_pleasure_to_have_you_Sir_advices_and_skills_you_shared_to_us_will_be_a_key_to_tackle_challenges_in_our_career._We_appreciate_your_coming_._3_zmdydi.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163802/KBA_ACADEMY/mushabe_alex1_was_a_pleasure_to_have_you_Sir_advices_and_skills_you_shared_to_us_will_be_a_key_to_tackle_challenges_in_our_career._We_appreciate_your_coming_._3_zmdydi.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163798/KBA_ACADEMY/We_feel_the_passion._Get_ready_for_the_next_intake_is_loading._For_more_information_in_Bio_1_suxabx.jpg",
		"https://res.cloudinary.com/didikwl4i/image/upload/v1715163798/KBA_ACADEMY/We_feel_the_passion._Get_ready_for_the_next_intake_is_loading._For_more_information_in_Bio_2_yir578.jpg",
	];
	return (
		<AnimatePage>
			<main className="font-nunito">
				<section className="min-h-[70vh] w-full flex flex-col relative">
					<div className="min-h-[60vh]">
						<img
							src={academy}
							className="w-full h-[70vh] object-cover object-center"
						/>
					</div>
					<div className=" absolute h-[70vh] top-0 px-6 w-full items-center bg-[rgba(255,255,255,0.8)] z-100 flex flex-col  justify-center">
						<h1 className="text-6xl font-semibold text-primary-orange font-paprika">
							KSB Academy
						</h1>
					</div>
				</section>
				<section className="w-11/12 py-8 mx-auto">
					<div className="min-h-[80vh] flex flex-col-reverse md:flex-row gap-8 ">
						<div className="w-full md:w-2/3 ">
							<p className="flex items-center justify-center gap-6 mb-4 text-2xl md:justify-normal">
								About the Program
								<a
									href=""
									className="px-3 flex items-center py-1 text-sm font-semibold rounded-[4px] text-white bg-light-chocolate">
									Register now
								</a>
							</p>
							<div className="grid w-full gap-4 md:grid-cols-3">
								<div className="bg-[rgb(255,248,241)] rounded-[8px]  p-3   flex items-center gap-3">
									<IoIosTimer className="text-3xl" />
									<div>
										<p className="text-lg font-bold">Program duration</p>
										<p className="">5 weeks</p>
									</div>
								</div>
								<div className="bg-[rgb(255,248,241)] rounded-[8px]  p-3   flex items-center gap-3">
									<IoLocationOutline className="text-3xl" />
									<div>
										<p className="text-lg font-bold">Location</p>
										<p className="">Kigali Specialist Barista Academy</p>
										<p className="">Behind Gasabo district office </p>
									</div>
								</div>

								<div className="bg-[rgb(255,248,241)] rounded-[8px]  p-3   flex items-center gap-3">
									<AiOutlineDollar className="text-3xl" />
									<div>
										<p className="text-lg font-bold">Fee</p>
										<p className="">Registration : 15,000 RWF</p>
										<p className="">School fees: 160,000 RWF </p>
										<p className="text-sm">
											All the materials and tools need are found on location{" "}
										</p>
									</div>
								</div>
							</div>

							<p className="my-4 text-lg font-semibold text-center md:text-left">
								What you will learn{" "}
							</p>

							<ul className="ml-12 list-disc">
								<li className="py-1">Introduction to Coffee Manuar Brewing</li>
								<li className="py-1">
									Practical training of traditional coffees
								</li>
								<li className="py-1">Basic late art</li>
								<li className="py-1">Cold cofee</li>
								<li className="py-1">Frappe, Milkshakes,Mojitos, Iced Tea</li>
								<li className="py-1">
									ESPRESSO Machine and Accessories cleanining
								</li>
								<li className="py-1">Customer Service Training</li>
								<li className="py-1">And More</li>
							</ul>
							<p className="my-4 text-lg font-semibold text-center md:text-left">
								What you Gain{" "}
							</p>
							<ul className="ml-12 list-disc">
								<li className="py-1 font-bold">
									All the essential skills required to make a proffessional
									Barista
								</li>
								<li className="py-1">
									<span className="pr-2 font-bold">
										A certificate of completion
									</span>
									Awarded after completing the whole program and basing on your
									performance in the final exam
								</li>
							</ul>
							<p className="text-lg font-semibold text-center md:my-4 md:text-left">
								For more details{" "}
							</p>
							<div className="flex justify-center gap-4 my-4 md:justify-normal">
								<a
									href="https://forms.gle/BhkziRa9YcU46Kgj8"
									className="px-3 py-2 flex gap-3 items-center font-semibold rounded-[6px] text-white bg-light-chocolate">
									<BiCloudDownload className="text-2xl" />
									KBS call for student application [pdf]
								</a>
							</div>
						</div>
						<div className="hidden w-full md:w-1/3 md:block">
							<img
								className="rounded-[8px] w-full object-cover h-[30vh]  md:min-h-[50vh]"
								src={academy2}
							/>
						</div>
					</div>
				</section>
				<section className="w-11/12 mx-auto">
					<p className="my-4 text-lg font-semibold text-center"> Gallery</p>
					<div className=" py-8 grid min-h-[100vh] gap-2 md:grid-cols-3">
						{academyImages.map((img, index) => (
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

export default KsbaAcademy;
