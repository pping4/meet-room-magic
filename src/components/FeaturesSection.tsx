
import React from 'react';
import { Building, Calendar, MapPin, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Building className="h-10 w-10 text-meetroom-500" />,
      title: "Premium Spaces",
      description: "From intimate meeting rooms to large conference spaces, we offer versatile environments designed for productivity."
    },
    {
      icon: <Calendar className="h-10 w-10 text-meetroom-500" />,
      title: "Flexible Booking",
      description: "Book by the hour, half-day, or full day. Our flexible options fit your schedule and business needs."
    },
    {
      icon: <MapPin className="h-10 w-10 text-meetroom-500" />,
      title: "Prime Locations",
      description: "Strategically located in business districts with convenient access to transportation and amenities."
    },
    {
      icon: <Users className="h-10 w-10 text-meetroom-500" />,
      title: "Full Service Support",
      description: "On-site staff to assist with technical setup, catering arrangements, and any other needs during your meeting."
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-meetroom-800">Why Choose Our Meeting Rooms</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for successful meetings, presentations, and collaborations in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5 inline-block p-3 rounded-full bg-meetroom-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-meetroom-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
