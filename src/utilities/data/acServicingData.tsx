export const faqs: IFaq[] = [
	{
		title: "What types of services do you provide?",
		description:
			"We provide all types of Air Conditioner (AC) servicing solution. We provide AC Servicing, AC Repairing Maintenance, AC Installation & AC Supply related services.",
	},
	{
		title: "When your AC needs servicing?",
		description:
			"Go for AC servicing when cooling is not as per expectations or AC is not serviced for last 3 months. Regular servicing saves up to 25% on electricity bill and needless to say, it increases the age of your AC.",
	},
	{
		title: "How long will AC servicing take?",
		description:
			"AC servicing will take 30-45 minutes which is basically depends on the size of the AC. Time required to repair AC will depend upon the real issue/problem identified by our champs.",
	},
	{
		title: "Do I have to pay advance money before availing your service?",
		description:
			"Of course not! But sometime we will offer some lucrative promotional offers in terms of advance payment.",
	},
	{
		title: "Do I have to pay any charge if I don't take any service?",
		description:
			"If you don't avail any services for your AC after our Service Provider sends a technician at your doorstep, then you only have to pay the visiting charge.",
	},
	{
		title: "Is this only for household AC?",
		description:
			"Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
	},
	{
		title: "What if they damage my AC?",
		description:
			"Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
	},
];

const subServices: ISubservice[] = [
	{
		title: "HydroKleen AC Servicing (Before Service)",
		image: "/services/1/1.jpg",
		summary: [
			"Check AC. (If found any problem first inform to clients)",
			"Check Chill Factor (Cooling)",
			"Check Air Flow",
			"Check Room Temperature",
			"Check Gas Pressure",
			"Remove & Clean Filter",
		],
	},
	{
		title: "HydroKleen AC Servicing (During Service)",
		image: "/services/1/2.jpg",
		summary: [
			" Use Anti-Bacterial Spray (HydroKleen Special Anti-Bacterial Spray Which Keep Safe from Asthma and any Bacteria)",
			"Clean Indoor Scroll Fan with HydroKleen Machine & Gun",
			"Clean Indoor Evaporator (Coil)",
			"Outdoor Unit Clean",
			"Clean & Check Drain",
			"Check Chill Factor (Cooling) After Clean",
			"Sanitize Complete Inside Unit",
			"Reassemble Air Conditioner",
		],
	},
	{
		title: "HydroKleen AC Servicing (After Service)",
		image: "/services/1/3.jpg",
		summary: [
			"Check Air Flow",
			"Check Chill Factor (Cooling)",
			"Check Room Temperature",
			"Check Remote Settings",
			"Clean Up All Mess",
			"Use After Spray (Special Air Freshener)",
			"Apply Service Sticker to the Condenser Housing",
			"Note any Post Service Problems (If Any)",
			"Prepare & Leave Checklist",
		],
	},
	// {
	//     title: 'Jet Clean AC Servicing',
	//     image: "/services/1/4.jpg",
	//     summary: [
	//         'Cleaning of indoor & outdoor units',
	//         'High-Pressure Machine',
	//         ' Regular Cleaning Agent',
	//         'Clean evaporator (coil)',
	//         'Clean and check drain (Water drop solution)',
	//         'Clean condenser',
	//         'Check gas pressure',
	//         'Note any past service problems',
	//         'No Hidden charge '
	//     ]
	// }
];
export const subserviceSection: ISubserviceSection = {
	headerTitle: (
		<>
			AC <span>Servicing</span>
		</>
	),
	description:
		"We have a large team to service any kind of branded AC with the latest tools under experienced engineers. As we are the best AC servicing company in Bangladesh, we can do servicing based on your expectation.",
	services: subServices,
};
