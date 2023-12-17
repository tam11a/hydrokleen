import React from "react";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Offers from "./components/Offers";
import RecentWork from "./components/RecentWork";
import Clients from "./components/Clients";

const Home: React.FC = () => {
	return (
		<>
			<Banner />
			<Services />
			<Offers />
			<RecentWork />
			<Clients />
		</>
	);
};

export default Home;
