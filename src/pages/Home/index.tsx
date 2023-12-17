import React from "react";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Offers from "./components/Offers";

const Home: React.FC = () => {
	return (
		<>
			<Banner />
			<Services />
			<Offers />
		</>
	);
};

export default Home;
