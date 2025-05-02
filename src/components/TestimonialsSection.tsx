
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The meeting rooms at MeetRoom Magic are top-notch. The technology works flawlessly, and the spaces are always clean and professionally maintained.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote: "Booking was simple and the space exceeded our expectations. Our clients were impressed with the professional environment, which helped us close the deal.",
      author: "Marcus Chen",
      title: "Sales Manager, FinanceHub",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote: "We use MeetRoom Magic for all our offsite meetings now. Their locations are convenient, and the staff is always helpful and attentive to our needs.",
      author: "Amanda Rodriguez",
      title: "HR Director, InnovateGroup",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-meetroom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-meetroom-800">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from professionals who've experienced our spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-meetroom-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="mb-4">
                <svg className="h-8 w-8 text-meetroom-300 mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="text-meetroom-600 font-medium hover:text-meetroom-800 underline underline-offset-4">
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
