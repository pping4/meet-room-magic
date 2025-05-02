
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-meetroom-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Book Your Next Meeting?</h2>
          <p className="text-xl text-meetroom-100 mb-8 max-w-3xl mx-auto">
            Get started today and experience the difference a professional meeting environment makes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-meetroom-800 hover:bg-meetroom-50">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
