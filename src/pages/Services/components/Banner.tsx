import React from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner: React.FC<{
	images: string[];
}> = ({ images }) => {
	return (
		<Swiper
			centeredSlides={true}
			autoplay={{
				delay: 3500,
			}}
			spaceBetween={30}
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			modules={[Autoplay, Pagination]}
			className="p-4 pt-2 max-w-[95vw] mx-auto [&>div.swiper-wrapper]:mb-8 [&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-primary"
		>
			{images?.map((feedImg: string) => (
				<SwiperSlide key={feedImg}>
					<img
						src={feedImg}
						className="w-full object-cover rounded-md"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Banner;
