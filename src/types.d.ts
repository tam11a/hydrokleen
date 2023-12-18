interface IService {
    icon: string;
    title: string;
    description: string;
}

interface IOffer {
    title: string;
    amount: string;
    description: string;
}

interface IBlogs {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
}

interface IFaq {
    title: string;
    description: string;
    serviceList?: string[];
}

interface ISubservice {
    title: string;
    image: string;
    summary: string[];
}

interface ISubserviceSection {
    headerTitle: string;
    description: string;
    services: ISubservice[];
}
