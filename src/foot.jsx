import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import whatsapp from '../imgs/whatsapp.png';

export function Pata() {
  const phoneNumbers = [
    '+51 971 755 780',
    '+51 982 898 638',
    '+57 302 7080728',
  ];

  return (
    <div className=" flex justify-center bg-gradient-to-t from-green-700 via-green-700/70 to-transparent text-center mt-9 py-12">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        interval={3000} // Change interval as needed
        className="max-w-md"
      >
        {phoneNumbers.map((number, index) => (
          <div key={index} className="flex gap-10">
            <img
              src={whatsapp}
              className="bg-green-600/60 rounded-full w-8 mr-4 h-8"
              alt="whatsapp"
            />
            <h2 className="text-2xl font-semibold text-gray-100 text-shadow">
              {number}
            </h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
