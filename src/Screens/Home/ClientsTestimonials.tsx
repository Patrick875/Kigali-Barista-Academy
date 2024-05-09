import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { clientTestimonies } from "../../Shared/constants";
import { clientTest } from "../../Shared/types";
import ClientTestimonial from "./ClientTestimonial";

export default function ClientTestimonials() {
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
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper">
				{clientTestimonies.map(({ text, footer, name }: clientTest) => (
					<SwiperSlide key={crypto.randomUUID()}>
						<ClientTestimonial
							text={text}
							footer={footer}
							name={name ? name : "Appreciating Customer"}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
