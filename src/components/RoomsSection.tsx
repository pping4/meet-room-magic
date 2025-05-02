
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Calendar } from 'lucide-react';

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Executive Boardroom",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      capacity: "Up to 12 people",
      price: "$90/hour",
      features: ["65\" 4K Smart TV", "Video Conferencing", "Whiteboard", "Coffee Service"]
    },
    {
      id: 2,
      name: "Collaboration Studio",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
      capacity: "Up to 8 people",
      price: "$60/hour",
      features: ["Interactive Smart Board", "Modular Furniture", "Natural Lighting", "Refreshment Bar"]
    },
    {
      id: 3,
      name: "Conference Hall",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
      capacity: "Up to 30 people",
      price: "$150/hour",
      features: ["Dual Projectors", "Sound System", "Podium", "Catering Available"]
    }
  ];

  return (
    <section id="rooms" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-meetroom-800">Explore Our Meeting Spaces</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughtfully designed spaces to accommodate meetings of all types and sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-meetroom-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {room.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-meetroom-800">{room.name}</h3>
                <div className="flex items-center mb-3 text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{room.capacity}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-500 mb-2">AMENITIES</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-meetroom-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-meetroom-600 hover:bg-meetroom-700 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book This Room
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="border-2 border-meetroom-600 text-meetroom-600 hover:bg-meetroom-50">
            View All Meeting Spaces
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
