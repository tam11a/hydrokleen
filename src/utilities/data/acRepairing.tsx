export const faqs: IFaq[] = [
	{
		title: "What should I check before calling for a repair?",
		description:
			"Before you call us, check that the filter isn’t clogged and that the air conditioner is on and set to a temperature that will cause it to cycle. Check if the thermostat is operational, it may be possible that the batteries are simply bad. If you know where the disconnects are located, check those as well, and note if anything smells, looks, or sounds unusual.",
	},
	{
		title: "Why do I need to change my filter regularly?",
		description:
			"Regular filter replacement helps your heating and cooling system operate at peak levels and improves indoor air quality. It is important to change filters regularly to ensure proper air flow and to keep your home free from dust, allergens and germs. Depending on the type of filter you have, you may require weekly or monthly filter replacements. Your HYDROKLEEN service experts or installation technician will recommend the ideal filters and replacement schedules for your unit(s).",
	},
	{
		title:
			"How can I increase the efficiency and life of my home’s cooling systems?",
		description: "A few quick tips:",
		serviceList: [
			" Clean and replace your filters frequently.",
			"Your system will cool more evenly when the blower is in the “on” position. The blower provides constant air movement throughout the home, and allows for better filtration.",
			"Install shades, drapes, shutters, or screens on windows that are exposed to extreme sunlight to keep room temperatures at moderate levels.",
		],
	},
	{
		title: "How do I know if my AC unit is big enough?",
		description:
			"Bigger isn’t always better; its performance and efficiency count. Before purchasing a replacement system, you should always make sure your system is sized properly to match your needs and budget. Your HYDROKLEEN Expert will thoroughly assess your home and comfort requirements to determine the proper size and make the appropriate recommendation.",
	},
];

const subServices: ISubservice[] = [
	{
		title: "AC Circuit Repairing",
		image: "/services/2/1.jpg",
		summary: [
			"Primary Diagnosis",
			"AC Circuit repair and install",
			"Voltage and ampere checking",
		],
	},
	{
		title: "AC Fan Motor Repairing",
		image: "/services/2/2.jpg",
		summary: [
			"Deep Diagnoses",
			"Find out the exact problem",
			"Suggesting better solutions and other options ",
		],
	},
	{
		title: "AC Compressor Fitting with Gas Charge",
		image: "/services/2/3.jpg",
		summary: ["Old Compressor removal ", "New Compressor installation"],
	},
	{
		title: " AC Capacitor Replacement",
		image: "/services/2/4.jpg",
		summary: [
			"Primary Diagnoses",
			"Capacitor Replacement",
			"Problem Identification ",
		],
	},
];
export const subserviceSection: ISubserviceSection = {
	headerTitle: (
		<>
			AC Repairing <br /> <span>& Maintenance</span>
		</>
	),
	description:
		"We are committed to bringing you the best air conditioning repair services. Our experts are professional, courteous, and honest. We always try to provide an absolute AC Repairing & Maintenance Service for our honourable clients.",
	services: subServices,
};
