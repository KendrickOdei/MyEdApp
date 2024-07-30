import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsItemProps {
  title: string;
  date: string;
  description: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, description }) => (
  <div className="mb-6 p-4 border border-gray-200  bg-white h-96 mr-4 " >
     <div className="border-l-4 border-[#A42254] p-2 mt-12" >
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
    <motion.section className="p-6  md:ml-6 md:mr-6 mr-4 ml-4 bg-[#040F26] shadow-harvard-dark" 
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
      
      <div className=' w-full h-full  ' >

      <div className='w-full items-center justify-center  object-cover h-full bg-no-repeat 'style={{backgroundImage:`url(/darkHero.jpeg)`}}>
        
      <NavLink 
        to='/DirectorsMessage'
        
      >
        <div className="flex  mt-8 mx-auto  text-white text-center py-2 px-4  shadow-md transition-colors duration-300 ">
        <span className='font-bold font-Poppins text-2xl ml-2 flex gap-4 px-4 mt-[300px]  py-4 md:text-2xl '>
        More Details
        
        <span className='bg-red-500 rounded-full p-1 text-2xl hover:bg-pink-700'>
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
       
        </span>
        

        </div>
        
        
      
      </NavLink>

        
      </div>
      
      
      </div>
      </div>
      
      
    </motion.section>
  );
};

export default NewsSection;
