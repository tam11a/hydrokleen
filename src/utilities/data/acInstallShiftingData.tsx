import serviceImage01 from '../assets/images/Service_3_Spotlight/Service-Card-Image_03_01.jpg';
import serviceImage02 from '../assets/images/Service_3_Spotlight/Service-Card-Image_03_02.jpg';
import serviceImage03 from '../assets/images/Service_3_Spotlight/Service-Card-Image_03_03.jpg';
export const faqs: IFaq[] = [
    {
        title: 'When is the best time to install an air conditioner in your home?',
        description:
            'The best time to install an air conditioner in your home is typically in the spring or fall, when temperatures are moderate. Installing an AC unit during the summer, when temperatures are high, can lead to increased energy bills as the unit works harder to cool your home. Likewise, installing an AC unit during the winter can cause it to work harder to combat the cold weather and may lead to increased energy bills.'
    },
    {
        title: 'What factors should you consider before AC installation?',
        description:
            'Before you install an AC, there are a few factors that you should take into consideration.',
        serviceList: [
            'The size of your home',
            'The climate in your area',
            'Your budget',
            'The features that you want',
            'Installation process'
        ]
    },
    {
        title: 'What is covered in AC installation?',
        description:
            'Installation of AC includes the laying of pipe, installation of indoor unit brackets, installation of the outdoor unit, connecting the indoor and outdoor unit with piping and setting up electrical connections. During installation, there may be some requirement of other services/material which will be available at additional prices like pipes, gas charging, electrical wires, bracket, stands, concealment for piping, electrical switch etc.'
    },
    {
        title: 'How do you decide on rates?',
        description:
            'Our prices include labour & transportation charges. Prices are fixed on the basis of type and size of the AC and are inclusive of all taxes.'
    },
    {
        title: 'What kind of maintenance is required for an AC unit installation in your home?',
        description:
            'Some general maintenance tasks that are typically required for AC units include:',
        serviceList: [
            'Inspecting and cleaning the air filter(s)',
            'Inspecting and cleaning the condenser coils',
            'Checking and replenishing the refrigerant levels',
            'Inspecting and cleaning the outdoor unit',
            'Lubricating moving parts',
            'Monitoring the electrical components '
        ]
    }
];

const subServices: ISubservice[] = [
    {
        title: 'AC Installation',
        image: serviceImage01,
        summary: [
            'AC Indoor & Outdoor Installation',
            'Check refrigerant pressure',
            'Check electric voltage and ampere',
            'Check AC functions after installation'
        ]
    },
    {
        title: 'AC Dismantle',
        image: serviceImage02,
        summary: [
            'AC indoor and outdoor dismantle',
            'No gas wastage during dismantling',
            'Disconnect electricity supply to AC',
            'Only Service charge applicable'
        ]
    },
    {
        title: 'AC Shifting ',
        image: serviceImage03,
        summary: [
            'Shifting AC unit from one place to another',
            'AC dismantling',
            'Installation',
            'Only Service charge applicable'
        ]
    }
];
export const subserviceSection: ISubserviceSection = {
    headerTitle: 'AC Installation & Shifting',
    description:
        'We are efficient in installing & shifting AC accurately in your home or office and recommend you which place will be best for AC installation so that you can get the best performance from the Air Conditioner.',
    services: subServices
};
