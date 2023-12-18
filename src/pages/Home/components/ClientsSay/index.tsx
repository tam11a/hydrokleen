import { IconButton } from "@mui/material";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import required modules

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

const ClientsSay: React.FC = () => {
	const feedbacks = [
		{
			avatar: "/avatar/1.jpg",
			name: "Arifur Rahman",
			designation: "Chairman, Blue Planet Group",
			feedback:
				"We thank HydroKleen Bangladesh Ltd. for the wonderful job of AC servicing and maintanence. Their team was professional and excellent. Thanks to them for their prompt support.",
		},
		{
			avatar: "/avatar/1.jpg",
			name: "Arifur Rahman",
			designation: "Chairman, Blue Planet Group",
			feedback:
				"We thank HydroKleen Bangladesh Ltd. for the wonderful job of AC servicing and maintanence. Their team was professional and excellent. Thanks to them for their prompt support.",
		},
		{
			avatar: "/avatar/1.jpg",
			name: "Arifur Rahman",
			designation: "Chairman, Blue Planet Group",
			feedback:
				"We thank HydroKleen Bangladesh Ltd. for the wonderful job of AC servicing and maintanence. Their team was professional and excellent. Thanks to them for their prompt support.",
		},
	];
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	const swiperRef = React.useRef<SwiperClass>();
	return (
		<div className="grid grid-cols-7 gap-2">
			<div className="col-span-7 md:col-span-4">
				<h2 className="text-4xl font-bold text-center text-slate-700 md:text-end mt-4">
					What Our
					<br />
					<span className="text-primary-600">Clients Say</span>
				</h2>
				<p className="text-lg font-semibold text-slate-600 text-center md:text-end mb-5 mt-3">
					Valuable Feedbacks from Our Clients
				</p>
				<Swiper
					centeredSlides={true}
					autoplay={{
						delay: 3500,
					}}
					loop={true}
					spaceBetween={30}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onBeforeInit={(swiper: SwiperClass) => {
						swiperRef.current = swiper;
						if (navigationNextRef)
							swiper.navigation.nextEl = navigationNextRef.current!;
						if (navigationPrevRef)
							swiper.navigation.prevEl = navigationPrevRef.current!;
					}}
					modules={[Navigation, Autoplay]}
				>
					{feedbacks.map((feedback, index) => (
						<SwiperSlide key={index}>
							<div className="flex flex-col items-center md:items-end p-3 justify-center">
								<p className="text-base font-semibold text-center md:text-right text-slate-600 max-w-lg">
									" {feedback.feedback} "
								</p>
								<div className="flex flex-col-reverse md:flex-row gap-2 mt-3 items-center justify-start">
									<div>
										<h3 className="text-xl font-bold text-center md:text-end">
											{feedback.name}
										</h3>
										<p className="text-xs font-semibold text-center md:text-end text-slate-600">
											{feedback.designation}
										</p>
									</div>
									<img
										src={feedback.avatar}
										alt={feedback.name}
										className="w-10 h-10 rounded-full"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex flex-row items-center justify-center md:justify-end text-primary-600">
					<IconButton
						color="primary"
						id="prev-review"
						ref={navigationPrevRef}
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<BsArrowLeft />
					</IconButton>
					<IconButton
						color="primary"
						id="next-review"
						ref={navigationNextRef}
						onClick={() => swiperRef.current?.slideNext()}
					>
						<BsArrowRight />
					</IconButton>
				</div>
			</div>
			<div className="col-span-3 hidden md:inline-block">
				<img
					src="/review.svg"
					className="max-h-64"
				/>
			</div>
		</div>
	);
};

export default ClientsSay;
