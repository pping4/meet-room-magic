
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-meetroom-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="text-center lg:text-left">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Elevate Your Business</span>
              <span className="block text-meetroom-200">With Premium Meeting Spaces</span>
            </h1>
          </div>
          <div className="mt-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="max-w-lg mx-auto lg:mx-0 text-xl text-meetroom-100">
              Professional conference rooms and meeting spaces designed for productivity, equipped with cutting-edge technology and exceptional service.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-meetroom-500 hover:bg-meetroom-600 text-white">
                Book a Room
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-meetroom-800">
                View Our Spaces
              </Button>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center">
              <div className="bg-meetroom-100 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-meetroom-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2 text-white">Multiple Locations</span>
            </div>
            <div className="flex items-center">
              <div className="bg-meetroom-100 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-meetroom-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2 text-white">High-Speed WiFi</span>
            </div>
            <div className="flex items-center">
              <div className="bg-meetroom-100 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-meetroom-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2 text-white">24/7 Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
