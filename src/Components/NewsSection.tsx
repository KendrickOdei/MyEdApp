import React from 'react';
import {motion} from 'framer-motion'

import { NavLink } from 'react-router-dom';



const NewsSection: React.FC = () => {


  return (
    <motion.div className="relative w-full h-full md:h-[800px] mt-[-70px] bottom-6 "
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.1,
      x: { type: "inertia", velocity: 10, stiffness: 60 },
      opacity: { duration: 1, ease: "easeIn" },
      duration: 1
    }}
    viewport={{ once: true }}
    >
    
  <img src="IMG_0270.JPG" alt="Background Image" className="object-cover w-full h-full min-h-screen"/>

  
  <div className="absolute inset-0 flex items-center justify-center">
  <p className='p-4 mt-[-220px] text-white font-bold text-2xl text-center'>JOIN US TODAY AND EMBARK ON A PATH TO SUCCESS.</p>
  <button className="absolute text-xl mt-44 w-[300px]  bg-blue-900 text-white font-bold py-4 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
      <NavLink
        to='/Admission'
        >
          Apply Now
          
      </NavLink>
  </button>
  </div>
</motion.div>

  );
};

export default NewsSection;
