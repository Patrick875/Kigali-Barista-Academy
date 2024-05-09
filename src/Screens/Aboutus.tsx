import founderImage from "../assets/founder.jpg";
function Aboutus() {
	return (
		<main>
			<section className="min-h-[80vh] font-nunito w-11/12 mx-auto">
				<div className="flex mt-4">
					<div className="w-1/2 px-3 text-justify ">
						<div className="pb-4 ">
							<p className="text-4xl font-paprika"> Ntwali Lizwan</p>
							<p className="text-lg font-paprika"> Co-founder and CEO</p>
						</div>
						<hr className="bg-light-chocolate  w-full font-bold" />
						<p className="text-lg">
							After gradudating from highschool, I fell in love with coffee
							making. After I landed a Job, I saw other young people interested
							in coffee making. I got the idea to create a hub where I can teach
							people the art of coffee making
						</p>
					</div>
					<div className="w-1/2 h-[70vh] rounded-[8px]">
						<img
							src={founderImage}
							className="rounded-[8px] object-cover object-top w-full h-full"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Aboutus;
