import serviceImage01 from '../assets/images/Service_4_Spotlight/Service-Card-Image_04_01.jpg';
import serviceImage02 from '../assets/images/Service_4_Spotlight/Service-Card-Image_04_02.jpg';
import serviceImage03 from '../assets/images/Service_4_Spotlight/Service-Card-Image_04_03.jpg';
// import serviceImage04 from '../assets/images/Service_4_Spotlight/Service-Card-Image_04_04.jpg';
// import serviceImage05 from '../assets/images/Service_4_Spotlight/Service-Card-Image_04_05.jpg';
const subServices: ISubservice[] = [
    {
        title: 'Split AC',
        image: serviceImage01,
        summary: [
            'Powerful Cooling',
            'Tropical Specifications',
            'Eco-friendly Gas',
            'HydroKleen Anti-Bacterial Spray',
            'Low Noise Design'
        ]
    },
    {
        title: 'Ceiling AC',
        image: serviceImage02,
        summary: [
            'Powerful Cooling',
            'Slim and Compact Design',
            'Double Auto Swing',
            'Wide and Long Airflow'
        ]
    },
    {
        title: 'Cassette AC',
        image: serviceImage03,
        summary: [
            'Powerful Cooling',
            'Compact Size',
            '2-4 Way Air Flow System',
            '4-Step Swing'
        ]
    }
    // {
    //     title: 'AC Compressor',
    //     image: serviceImage02,
    //     summary: [
    //         'Environment Friendly product',
    //         'Auto Restart Function enable',
    //         'Easily Installation manual system',
    //         'Perfect Cooling capacity'
    //     ]
    // },
    // {
    //     title: 'AC Gas Charge',
    //     image: serviceImage02,
    //     summary: [
    //         'Performance Check-up',
    //         'Post gas refill',
    //         'Refrigerant Pressure Check',
    //         'Refrigerant charge according to need'
    //     ]
    // }
];
export const subserviceSection: ISubserviceSection = {
    headerTitle: 'AC Supply',
    description:
        'Hydrokleen is also a leading AC Supply company in Bangladesh. We offer any kind of Branded AC (depending on the availability in the market). So, you can purchase any kind of AC from Hydrokleen Bangladesh.',
    services: subServices
};
export const faqs: IFaq[] = [
    {
        title: 'What are the types of AC?',
        description:
            'Before committing to buying a new air conditioner, it’s very important to consider the infrastructure of your accommodation and your budget with the type of air conditioner.',
        serviceList: [
            'Window Type: Simplest air conditioning system and comes as a single unit. Usually mounted on walls or windows.',
            'Split Wall Type: These machines have two parts. The heavier parts, including the compressor, are mounted outside, while the other is mounted on the inside. The two parts are connected with electrical cabling and copper tubing.',
            'Ceiling Type: These are ceiling mounted units and are used when wall space is limited. Suitable for office and retail environments.',
            'Cassette Type: Another ceiling mounted unit. These are normally placed flushed with the ceiling. Often used in rooms or spaces with false ceilings.',
            'Ducted Type: These are normally used with HVAC systems.'
        ]
    },
    {
        title: 'What should we check before buying AC?',
        description: '',
        serviceList: [
            '- Capacity',
            '- Energy Efficiency.',
            '- AC Type',
            '- Split or Window',
            '- Air Quality',
            '- Speed',
            '- Installation and Maintenance'
        ]
    },
    {
        title: 'What capacity AC do I need in my room?',
        description:
            'Here is an approximate estimation of room size wise AC capacity:',
        serviceList: [
            'Up to 120 sq ft – 1 ton',
            'Up to 180 sq ft – 1.5 ton',
            'Up to 240 sqft – 2.0 ton',
            'Up to 300 sq ft – 2.5 ton',
            'Up to 360 sqft – 3.0 ton',
            'Up to 480 sqft – 4.0 ton',
            'Up to 540 sq ft – 4.5 ton',
            'Up to 600 sq ft – 5.0 ton'
        ]
    },
    {
        title: 'Which AC is best for the bedroom?',
        description:
            'A 1-ton window AC or a 1.5-ton split AC would be sufficient for rooms measuring up to 150-160 sq ft [conditions applied]. So, depending on your bedroom size, you may choose either of these.'
    },
    {
        title: 'What is the advantage of Inverter AC?',
        description: '',
        serviceList: [
            'Consumes less power in comparison to a traditional AC.',
            'No voltage fluctuation.',
            'Keeps constant room temperature.',
            'Effective cooling.',
            'Suitable for small and large spaces.',
            'Safe for residential wiring due to lower power consumption.',
            'Environment-friendly.'
        ]
    },
    {
        title: 'What payment methods do you accept?',
        description:
            'We accept various categories of payment methods. Beside cash payment, we also accept Bkash, Nagad and Cards (Visa/ Master/ Amex).'
    },
    {
        title: 'Do you offer volume discounts?',
        description: 'Sorry, we do not offer any volume discounts.'
    }
];
