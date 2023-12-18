import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import { faqs, subserviceSection } from "@/utilities/data/acServicingData";
import SubService from "../components/SubService";
import BookOrCall from "../components/BookOrCall";

const ACServicing: React.FC = () => {
	return (
		<>
			<Banner images={["/services/1/banner.jpg"]} />
			<SubService {...subserviceSection} />
			<BookOrCall />
			<Faq faqs={faqs} />
		</>
	);
};

export default ACServicing;
