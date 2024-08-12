import  { useState, useEffect } from 'react';

const sectionsData = [
  {
   
    images: [
      { src: '/img1.JPG', name: 'Modern Library' },
      { src: '/darkHero.jpeg', name: 'Computer Laboratory' },
    ],
    interval: 3000, // 3 seconds
  },
  {

    images: [
      { src: '/img2.JPG', name: 'Conference Hall' },
      { src: '/img1.JPG', name: 'Modern Classroom' },
    ],
    interval: 4000, // 5 seconds
  },
  // Add more sections as needed with their respective intervals
];

const Facilities = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    sectionsData.map(() => 0) // Initialize an array of currentIndex for each section
  );

  useEffect(() => {
    const intervals = sectionsData.map((section, sectionIndex) =>
      setInterval(() => {
        setCurrentIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          const totalImages = sectionsData[sectionIndex].images.length;
          newIndexes[sectionIndex] = (newIndexes[sectionIndex] + 1) % totalImages;
          return newIndexes;
        });
      }, section.interval)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleNext = (sectionIndex: number) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalImages = sectionsData[sectionIndex].images.length;
      newIndexes[sectionIndex] = (newIndexes[sectionIndex] + 1) % totalImages;
      return newIndexes;
    });
  };

  const handlePrev = (sectionIndex: number) => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const totalImages = sectionsData[sectionIndex].images.length;
      newIndexes[sectionIndex] =
        (newIndexes[sectionIndex] - 1 + totalImages) % totalImages;
      return newIndexes;
    });
  };

  return (
    <div className="explore-infrastructure py-4 bg-[#040F26] text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Tour Our Campus</h2>
      <p className="text-lg mb-8 text-white">Discover the facilities that make our institution stand out.</p>

      <div className="flex flex-col md:flex-row md:space-x-8 gap-8">
      {sectionsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="relative mb-8 md:flex-1">
        
          <div className="relative overflow-hidden w-full h-[280px]">
            <div
              className="absolute w-full h-full flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndexes[sectionIndex] * 100}%)` }}
            >
              {section.images.map((image, imgIndex) => (
                <div key={imgIndex} className="w-full flex-shrink-0 relative">
                  <img src={image.src} alt={image.name} className="w-full h-full md:h-[900px] object-cover" />
                  <div className="absolute inset-0 bg-opacity-50 flex justify-center items-center">
                    <p className="text-white text-xl font-bold">{image.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={() => handlePrev(sectionIndex)}
              className="bg-sky-900 text-white p-2 rounded-full ml-4"
            >
             <svg
              xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
                fill="currentColor"
                 className="size-6">
                <path fill-rule="evenodd" 
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>


            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={() => handleNext(sectionIndex)}
              className="bg-sky-900 text-white p-2 rounded-full mr-4"
            >
             <svg 
             xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-6">
            <path fill-rule="evenodd"
                 d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>

            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Facilities;
