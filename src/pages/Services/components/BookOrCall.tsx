import { Button } from "antd";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookOrCall: React.FC = () => {
	return (
		<div className="flex flex-col sm:flex-row items-start sm:scale-125 sm:items-center justify-center my-20 gap-2 mx-auto">
			<Link to="tel:+8801902464646">
				<Button
					type="primary"
					size="large"
					className=" bg-orange-500 hover:!bg-orange-700 flex flex-row items-center"
					icon={<BsFillTelephoneFill />}
				>
					Call
				</Button>
			</Link>
			<Link to="/book-now">
				<Button
					type="primary"
					size="large"
					className="flex bg-primary hover:!bg-primary-700 flex-row-reverse items-center"
					icon={<FaCircleArrowRight className="ml-3 text-xl" />}
				>
					Book Now
				</Button>
			</Link>
		</div>
	);
};

export default BookOrCall;
