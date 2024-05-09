import { BsPhone } from "react-icons/bs";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import contactus from "../assets/contactus.jpg";
import AnimatePage from "../Shared/AnimatePage";

function Contactus() {
	return (
		<AnimatePage>
			<main>
				<section className="min-h-[70vh] w-full flex flex-col relative">
					<div className="min-h-[60vh]">
						<img
							src={contactus}
							className="w-full h-[70vh] object-cover object-center"
						/>
					</div>
					<div className=" absolute h-[70vh] top-0 px-6 w-full items-center bg-[rgba(255,255,255,0.8)] z-100 flex flex-col  justify-center">
						<h1 className="text-6xl font-semibold text-primary-orange font-paprika">
							Contact us
						</h1>
					</div>
				</section>
				<section id="contactus" className="w-5/6 md:py-8 mx-auto min-h-[90vh]">
					<p className="py-4 text-2xl font-bold text-center">Contact Us</p>
					<div className="flex flex-col-reverse items-center w-full md:items-start md:flex-row ">
						<div className="w-full my-6 text-lg md:w-1/2">
							<p className="font-bold text-center text-gray-600 md:text-start md:text-xl">
								Reach us directly at{" "}
							</p>
							<p className="my-2 font-light text-center md:text-start">
								Call us directly
							</p>
							<p className="flex items-center justify-center gap-4 my-2 font-bold text-center md:justify-normal md:text-start ">
								<BsPhone />
								+250 784 254 440 / +250 786 525 895
							</p>
							<p className="my-2 font-light text-center md:text-start">
								Contact email
							</p>
							<p className="my-2 font-bold text-center md:text-start">
								kigalispecialistsbaristaltdkbc@gmail.com
							</p>

							<Link
								to="contactus"
								className="md:w-1/3 w-full   p-2 block my-4 md:my-2  text-center font-bold rounded-full md:rounded-[4px]  border-[1.5px] hover:bg-slate-800 hover:text-white transition-all  text-slate-800 bg-white  border-slate-800">
								Reach out{" "}
							</Link>
						</div>

						<div className="w-full bg-red-900 md:w-1/2 h-[60vh]  ">
							<MapContainer
								className="w-full h-[60vh] rounded-[8px] "
								center={[-1.9531195856691435, 30.10547096700199]}
								zoom={13}
								scrollWheelZoom={false}>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker position={[-1.9531195856691435, 30.10547096700199]}>
									<Popup>
										<p className="font-bold text-primary-orange">KG 181 St</p>
									</Popup>
								</Marker>
							</MapContainer>
						</div>
					</div>
				</section>
			</main>
		</AnimatePage>
	);
}

export default Contactus;
