import { Clock, Contact, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orleans, LA 70110, USA",
    icon: <MapPin className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Call Us",
    subtitle: "+1 (123) 456-7890",
    icon: <Phone className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Email Us",
    subtitle: "contact@shopcart.com",
    icon: <Mail className="w-6 h-6 text-gray-400" />,
  },

  {
    title: "Working Hours",
    subtitle: "Mon - Fri: 9:00 AM - 6:00 PM",
    icon: <Clock className="w-6 h-6 text-gray-400" />,
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((item, index) => (
        <div key={index} className="flex items-center gap-3 group hover:bg-gray-50 p-4 rounded-md transition-colors hoverEffect">
          {item?.icon}
          <div className="">
            <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">{item?.title}</h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect">{item?.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
