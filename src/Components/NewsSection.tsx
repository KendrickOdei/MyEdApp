import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsItemProps {
  title: string;
  date: string;
  description: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, description }) => (
  <div className="mb-6 p-4 border border-gray-200  bg-white">
     <div className="border-l-4 border-[#A42254] p-2">
    <h2 className="text-sky-900 text-xl font-bold mb-2">{title}</h2>
    <p className="text-red-600 mb-2 font-bold">{date}</p>
    <p className="text-sky-900">{description}</p>
  </div>

  </div>
 
);

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      title: "Ed Summer holiday classes",
      date: "Date: August 5th - September 3rd",
      description: "We are excited to announce our upcoming summer classes! These classes provide an excellent opportunity for students to enhance their learning and stay engaged over the summer break..."
    },
  
    // Add more news items as needed
  ];

  return (
    <motion.section className="p-6  md:ml-6 md:mr-6 mr-4 ml-4 bg-[#040F26] " 
    initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "inertia", velocity: 10, stiffness: 60 },
          opacity: { duration: 1, ease: "easeIn" },
          duration: 0.5
        }}
        viewport={{ once: true }}
    >
      
      <div className='border-l-4 border-[#C6C214] ml-4'>
      <h1 className="text-2xl font-bold mb-4 font-Poppins p-2 text-white ">Join our summer classes</h1>
      </div>
      <div className='md:flex'>

      
      <div>
      {newsItems.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
      </div>
      
      <div>
      
      
        <img className='w-full' src="/darkHero.jpeg" alt="" />
        <NavLink 
        to='/DirectorsMessage'
        className="flex gap-2 mt-8 mx-auto bg-[#3D2252] text-white text-center py-2 px-4  shadow-md hover:bg-[#5b3d6b] transition-colors duration-300 "
      >
        
        <span className='font-bold font-Poppins text-xl ml-2'>
        More Details
        </span>
        <span className='font-bold text-2xl p-1 bg-red-500 rounded-full'>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
            />
          </svg>

        </span>
      
      </NavLink>
      </div>
      </div>
      
      
    </motion.section>
  );
};

export default NewsSection;
