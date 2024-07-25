import { useState, useEffect } from 'react';

const Hero = () => {
  const [slides] = useState([
    {
      imageUrl: '/src/assets/img1.jpg',
      text: 'A TESTIMONY THAT OUR LORD IS GOD  ',
    },
    {
      imageUrl: '/src/assets/img2.jpg',
      text: 'Education is the foundation upon which we build our future.',
    },
    {
      imageUrl: '/src/assets/img3.jpg',
      text: 'Intelligence plus character - that is the goal of true education',
    },
    // Add more slides as needed
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="relative top-[-24px] h-96 ml-4 mr-4 mt-28 md:mt-[140px] md:h-full">
      {/* Sliding images container */}
      <div className="left-0 w-full min-h-screen overflow-hidden z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={` md:h-full absolute top-0 left-0 w-full h-96 object-cover transition-opacity duration-1000 ${
              index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            {/* Text overlay */}
            <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 text-white font-Poppins md:text-8xl text-4xl font-bold text-center">
            <div className=" p-4 rounded-lg block">
                
            
                {slide.text}
            
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
