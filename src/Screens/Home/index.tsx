import { Link } from "react-router-dom";
import aboutUsImage from "../../assets/aboutus.jpg";
import trainingImage from "../../assets/training.jpg";
import teachingImage from "../../assets/teaching.jpg";
import catering1 from "../../assets/catering1.jpg";
import { BsPhone } from "react-icons/bs";
import "./index.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import StudentsTestimonials from "./Slider.StudentsTestimonials";
import ClientTestimonials from "./ClientsTestimonials";
import { motion } from "framer-motion";

function HomePage() {
	return (
		<main className="relative font-nunito">
			{/* {<TopBar isTopOfPage={isTopOfPage} />} */}
			<section className="min-h-[70vh] flex flex-col  ">
				<div className="relative min-h-[70vh]   ">
					<div className="  w-full bg-hero-image  bg-cover bg-center h-[70vh]" />
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						className=" absolute h-[70vh] top-0 px-6 w-full items-center bg-[rgba(255,255,255,0.8)] z-100 flex flex-col  justify-center">
						<h1 className="text-2xl font-semibold text-center md:text-6xl text-primary-orange font-paprika">
							The Kigali Specialist Baristas
						</h1>
						<div className="mt-12 text-xl font-semibold text-center text-primary-orange font-paprika">
							Training the next generation of Professional Baristas
						</div>
					</motion.div>
				</div>
			</section>
			<section className="justify-center bg-fixed bg-who-image">
				<div className="mx-auto py-12 w-full  bg-white md:min-h-[50vh]">
					<div className="min-h-[50vh] w-full mx-auto   flex  flex-col-reverse md:flex-row p-3 px-8 gap-3">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 },
							}}
							className="w-full md:w-1/2">
							<p className="text-lg font-extrabold text-center uppercase font-paprika text-light-chocolate">
								"Feel The passion"
							</p>
							<div className="md:px-6  pt-1">
								<h1 className="py-2 text-lg  font-bold md:text-3xl font-paprika">
									Welcome
								</h1>
								<p className="text-lg  md:mt-4 font-nunito md:text-justify">
									Welcome to Kigali Specialist Barista Academy! We're all about
									teaching you how to make great coffee and catering for special
									events. Learn from our experts and make awesome coffee at home
									or work. We also cater for events, making sure everyone gets a
									taste of delicious coffee. Come join us and explore the world
									of amazing coffee flavors!
								</p>
							</div>
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							variants={{
								hidden: { opacity: 0, y: -50 },
								visible: { opacity: 1, y: 0 },
							}}
							className="h-[50vh] rounded-[12px]  md:w-1/2 w-full">
							<img
								className="block h-[50vh] rounded-[12px] object-top object-cover w-full mx-auto"
								src={aboutUsImage}
							/>
						</motion.div>
					</div>
				</div>
				<div className="md:px-14 px-4 bg-[rgba(67,32,16,0.92)] text-white py-6   min-h-[60vh] flex flex-col">
					<p className="py-2 text-xl font-bold text-center md:text-3xl md:text-left font-paprika">
						{" "}
						KSBA Academy{" "}
					</p>

					<div className="min-h-[50vh]  flex md:flex-row flex-col-reverse  gap-3">
						<div className="w-full md:w-1/2">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.6, duration: 0.8 }}
								variants={{
									hidden: { opacity: 0, y: -50 },
									visible: { opacity: 1, y: 0 },
								}}
								className="mt-2 md:w-10/12 md:mt-6">
								<p className="text-lg text-justify md:text-xl">
									Explore the world of coffee and more at our Barista Academy.
									In our 5-week program, you'll learn everything a barista does.
									From making coffee and juices to serving customers, we cover
									it all. With our expert instructors, you'll master making
									coffee, crafting juices, and serving customers with a smile.
									Join us for an exciting journey into the world of being a
									barista!
								</p>
							</motion.div>
							<Link
								to="training"
								className="block w-full md:w-1/2 py-2  mt-10 text-xl font-semibold text-center text-[rgb(67,32,16)] rounded-[6px]  bg-white">
								Join our 5 week program
							</Link>
						</div>
						<div className="h-[50vh] flex gap-2 relative rounded-[12px]  md:w-1/2 w-full">
							<motion.img
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.6, duration: 0.95 }}
								variants={{
									hidden: { opacity: 0.4, y: -30 },
									visible: { opacity: 1, y: 0 },
								}}
								className="w-1/2  md:w-1/2 rounded-[12px] h-[50vh]"
								src={teachingImage}
							/>

							<motion.img
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ delay: 0.8, duration: 0.95 }}
								variants={{
									hidden: { opacity: 0.4, y: 30 },
									visible: { opacity: 1, y: 0 },
								}}
								className="md:absolute w-1/2 md:right-32 md:-top-10 rounded-[12px] h-[50vh]  "
								src={trainingImage}
							/>
						</div>
					</div>
				</div>
				<div className=" bg-[rgba(255,255,255,0.92)]  md:px-14 px-4 flex flex-col md:flex-row  min-h-[60vh] bg-center bg-cover ">
					<div className="md:w-1/2 w-full  py-3 h-[50vh]">
						<motion.img
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							variants={{
								hidden: { opacity: 0, y: -50 },
								visible: { opacity: 1, y: 0 },
							}}
							className="block h-[50vh] rounded-[12px] object-top object-cover w-11/12 mx-auto"
							src={catering1}
						/>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.8, duration: 0.95 }}
						variants={{
							hidden: { opacity: 0.4, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						className="w-full md:w-1/2 py-3 min-h-[50vh]">
						<p className="py-6 text-xl font-bold text-center md:text-3xl font-paprika">
							{" "}
							KSB Catering{" "}
						</p>
						<p className="text-xl font-semibold text-center font-paprika text-light-chocolate">
							"Make your events unforgettable with our amazing catering
							services, where we make sure every detail is just right."
						</p>
						<p className="mt-4 text-lg font-semibold text-light-chocolate">
							Aside from training the next generation of baristas, we also
							provide catering services for different events. From birthdays, to
							meetings to weddings, we provide you with all you need to make
							your event one that you and your guests will remember for ages.
						</p>
						<Link
							to="ksbcatering"
							className=" px-8 py-2 block w-full md:max-w-fit  mt-10 text-xl font-semibold text-center text-white rounded-[6px]  bg-[rgb(67,32,16)]">
							Contact us for more details
						</Link>
					</motion.div>
				</div>
				<section className="md:px-14 px-4 bg-white  min-h-[90vh] flex flex-col py-4">
					<p className=" text-2xl  text-center md:text-left md:text-4xl text-light-chocolate md:max-w-[380px]">
						Students' Testimonials
					</p>

					<StudentsTestimonials />
				</section>
				<section className="md:px-14 px-4 bg-white  min-h-[60vh] flex flex-col">
					<p className="text-2xl md:text-4xl text-center md:text-left text-light-chocolate md:max-w-[380px]">
						Clients' Testimonials
					</p>
					<ClientTestimonials />
				</section>
			</section>

			<section className="px-8 md:px-14 min-h-[30vh] flex flex-col justify-center">
				<p className="text-2xl text-center md:text-4xl ">
					{" "}
					What are you waiting for ?{" "}
				</p>
				<div className="flex justify-center">
					<a
						target="_blank"
						href="https://forms.gle/BhkziRa9YcU46Kgj8"
						className="block w-3/4 py-1 my-3 text-center text-white rounded-full md:w-2/4 md:w-1/3 bg-light-chocolate">
						Register for the next cohort
					</a>
				</div>
			</section>
			<section id="contactus" className="w-11/12 md:py-8 mx-auto min-h-[90vh]">
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
	);
}

export default HomePage;