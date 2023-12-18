import React from "react";
import Banner from "../components/Banner";
import SubService from "../components/SubService";
import { faqs, subserviceSection } from "@/utilities/data/acSupplyData";
import BookOrCall from "../components/BookOrCall";
import Faq from "../components/Faq";

// 4
const ACSupply: React.FC = () => {
	return (
		<>
			<Banner images={["/services/4/banner.jpg"]} />
			<SubService {...subserviceSection} />
			<BookOrCall />
			<Faq faqs={faqs} />
		</>
	);
};

export default ACSupply;
