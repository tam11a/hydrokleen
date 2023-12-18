import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Clients: React.FC = () => {
	return (
		<>
			<h2 className="text-4xl text-slate-700 font-bold  text-center mt-28">
				Our Clients in <span className="text-primary-600">Bangladesh</span>
			</h2>
			<p className="text-lg font-semibold text-slate-600 text-center mb-9 mt-3 max-w-2xl mx-auto">
				We have already completed 2K+ corporate projects. Our clients are
				Hospitals, Group of companies, Markets, Bank, Multinational
				Organisation, University, Government project, Tender Work, and so on.
				Here are some of our major clients
			</p>
			<Swiper
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				slidesPerView={"auto"}
				modules={[Autoplay, Pagination]}
				spaceBetween={10}
				className="[&>div.swiper-wrapper]:mb-20 mt-14 [&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-primary"
			>
				{[...Array(38).keys()].map((client) => (
					<SwiperSlide
						key={client}
						className="!w-fit px-3 cursor-grab hover:scale-[104%] transition duration-100"
					>
						<img
							src={`/clients/${client + 1}.png`}
							className="w-[80%]"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Clients;
