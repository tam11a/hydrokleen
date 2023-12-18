import React from "react";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import { faqs } from "@/utilities/data/acServicingData";

const ACServicing: React.FC = () => {
	return (
		<>
			<Banner images={["/services/1/banner.jpg"]} />
			<Faq faqs={faqs} />
		</>
	);
};

export default ACServicing;
