import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ReviewCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    const windowWidth = window.innerWidth;
    let visibleImagesCount;

    if (windowWidth >= 1024) {
      visibleImagesCount = 3;
    } else if (windowWidth >= 768) {
      visibleImagesCount = 2;
    } else {
      visibleImagesCount = 1;
    }

    const startIndex = currentIndex;
    const endIndex = Math.min(startIndex + visibleImagesCount, images.length);

    return images.slice(startIndex, endIndex);
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {getVisibleImages().map((image, index) => (
          <div
            key={index}
            className={`snap-center flex-shrink-0 ${
              index === 0 || index === getVisibleImages().length - 1
                ? "opacity-75 blur-sm w-3/12"
                : "w-full"
            }`}
          >
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <IoIosArrowBack size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
