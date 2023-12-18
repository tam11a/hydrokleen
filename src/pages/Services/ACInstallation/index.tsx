import React from "react";
import Banner from "../components/Banner";
import SubService from "../components/SubService";
import BookOrCall from "../components/BookOrCall";
import Faq from "../components/Faq";
import {
	faqs,
	subserviceSection,
} from "@/utilities/data/acInstallShiftingData";

const ACInstallation: React.FC = () => {
	return (
		<>
			<Banner images={["/services/2/banner.jpg"]} />
			<SubService {...subserviceSection} />
			<BookOrCall />
			<Faq faqs={faqs} />
		</>
	);
};

export default ACInstallation;
