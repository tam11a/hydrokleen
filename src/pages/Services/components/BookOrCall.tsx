import { Button } from "antd";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookOrCall: React.FC = () => {
	return (
		<div className="flex flex-col sm:flex-row items-start sm:scale-125 sm:items-center justify-center my-20 gap-2 mx-auto max-w-md">
			<Link
				to="tel:+8801902464646"
				className="flex-1"
			>
				<Button
					type="primary"
					size="large"
					className=" bg-orange-500 justify-center hover:!bg-orange-700 flex flex-row items-center w-full"
					icon={<BsFillTelephoneFill />}
				>
					Call: 01902-464646
				</Button>
			</Link>
			<Link
				to="/book-now"
				className="flex-1"
			>
				<Button
					type="primary"
					size="large"
					className="flex justify-center bg-primary hover:!bg-primary-700 flex-row-reverse items-center w-full"
					icon={<FaCircleArrowRight className="ml-3 text-xl" />}
				>
					Book Now
				</Button>
			</Link>
		</div>
	);
};

export default BookOrCall;
