import React from "react";
// Swiper Component
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const banners = ["/banner/1.jpg", "/banner/2.jpg", "/banner/3.jpg"];

const Banner: React.FC = () => {
	return (
		<>
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
				{banners?.map((feedImg: string) => (
					<SwiperSlide key={feedImg}>
						<img
							src={feedImg}
							className="w-full object-cover rounded-md"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Banner;
