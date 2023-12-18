import BookNow from "@pages/BookNow";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const banners = ["/offers/1.jpg", "/offers/2.jpg"];

const Offers: React.FC = () => {
	const offers = [
		{
			title: "40% Discount for privilege card holders only.",
			terms: [
				"The card is not refundable or transferable.",
				"The card must be presented at the time of service.",
				"The discount cannot be combined with any other offers or discounts.",
				"The card can be used for multiple ACs.",
				"The card is not valid for repairs, gas charge or replacement parts.",
				"HydroKleen Bangladesh is not responsible for lost or stolen cards.",
				"HydroKleen Bangladesh reserves the right to change or cancel the card at any time.",
			],
		},
		{
			title: "25% Discount on AC gas refill, leak repair and servicing.",
			terms: [
				"This offer is valid for all type of AC.",
				"This offer is valid for HydroKleen Service only.",
				"This offer is not valid only for gas charge service.",
				"This offer is valid for leak repair service.",
				"This offer can not be combined with any other discount offers.",
				"HydroKleen Bangladesh reserves the right to change or cancel the offer at any time.",
			],
		},
	];
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
			<div className="max-w-5xl mx-auto p-4 grid grid-cols-2 gap-7">
				{offers.map((offer, index) => (
					<React.Fragment key={index}>
						<div className="col-span-2 md:col-span-1 bg-primary-50 px-7 py-5 rounded border border-primary-100 text-slate-700">
							<h2 className="font-bold text-3xl mt-5 text-primary-800">
								{offer.title}
							</h2>
							<p className="mt-10 font-semibold">Terms & Conditions:</p>
							<ul className="list-decimal list-inside my-4">
								{offer.terms.map((term, index) => (
									<li key={index}>{term}</li>
								))}
							</ul>
						</div>
					</React.Fragment>
				))}
			</div>
			<BookNow />
		</>
	);
};

export default Offers;
