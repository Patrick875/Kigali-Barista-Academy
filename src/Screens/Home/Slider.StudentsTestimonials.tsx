import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { studentTestimonies } from "../../Shared/constants";
import { studentTest } from "../../Shared/types";
import StudentTestimial from "./StudentTestimial";

export default function StudentsTestimonials() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper">
				{studentTestimonies.map(({ img, text, footer, name }: studentTest) => (
					<SwiperSlide key={crypto.randomUUID()}>
						<StudentTestimial
							img={img}
							text={text}
							footer={footer}
							name={name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
