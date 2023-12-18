import React from "react";
import Banner from "../components/Banner";
import { faqs, subserviceSection } from "@/utilities/data/acRepairing";
import SubService from "../components/SubService";
import Faq from "../components/Faq";
import BookOrCall from "../components/BookOrCall";

// 2
const ACRepairing: React.FC = () => {
	return (
		<>
			<Banner images={["/services/2/banner.jpg"]} />
			<SubService {...subserviceSection} />
			<BookOrCall />
			<Faq faqs={faqs} />
		</>
	);
};

export default ACRepairing;
