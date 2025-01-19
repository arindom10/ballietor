// src/components/SimpleCarousel.js
import React, { useState, useEffect } from "react";

const SimpleCarousel = () => {
  const images = [
    "https://paramounttextilebd.com/public/frontend/assets/img/slider/1650911121-6266e7917ec12.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/slider/1650910937-6266e6d9108cc.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/slider/1650911084-6266e76c96501.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/slider/1650910972-6266e6fc27515.jpg",
    "https://paramounttextilebd.com/public/frontend/assets/img/slider/1650910987-6266e70b04edc.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Automatically change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex transition-all duration-500 ease-in-out">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
      >
        &#62;
      </button>
    </div>
  );
};

export default SimpleCarousel;
