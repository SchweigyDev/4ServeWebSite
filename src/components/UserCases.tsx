import { Link } from "react-router-dom";

interface TemplateCardProps {
    title: string;
    description: string;
    image: string;
}

export default function UserCases({ title, description, image }: TemplateCardProps) {
    return (
        <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden transition">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <Link to="#" className="text-blue-600 hover:underline">View Details</Link>
            </div>
        </div>
    );
}