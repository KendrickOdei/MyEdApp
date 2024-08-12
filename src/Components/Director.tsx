import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Director = () => {
  return (
    <>
      <motion.div
        className=" relative md:flex md:flex-col md:items-center md:justify-center    mb-12 mt-[-6px] md:h-[520px] bg-[#040F26] "
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
      
        <div className="relative  z-10 md:flex md:flex-col ml-5 mr-5 md:items-center md:justify-center max-w-2xl mx-auto text-center p-8">
          <motion.div
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
          

          </motion.div>
          
          <div className="text-white text-center md:text-left space-y-2 ">
            <motion.h2
              className="md:text-4xl text-center font-bold text-2xl md:mt-[-10px] mt-[-30px] border-b-2 border-red-600 gap-4  p-4 md:border-b-2 md:border-red-600"
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
              Why Ed <span className='text-red-600 font-bold text-6xl'>?</span>
              
            </motion.h2>
            <motion.div className='md:flex '
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
            <p className='text-left md:text-[20px]'>
            The name "Ed" is taken from the book of Joshua 22:34. The motto of the school has a biblical foundation underscoring the Christian faith of the Directors of the school.
            The motto can be found in Joshua 22:34 which simply read <span className='bg-yellow-700 font-bold px-2 rounded'>"A testimony that our Lord is God"</span>
            </p>

              <p className='py-4 text-left md:py-0 md:px-4 md:text-[20px]'>
                Ed was established to provide Christ centered, affordable and quality education with integrity that all can trust. Our vision is to become the Christ centered educational 
                facility of choice, educate generations and create lasting change for Ghana and beyond.
              </p>

            </motion.div>

         
            
    
          </div>
        </div>
        <button>
        <NavLink 
        to='/AboutEd'
        className="flex absolute bottom-0   bg-sky-900 hover:bg-[#3D2252] text-white gap-2 w-full md:w-[1500px] shadow-md cursor-pointer p-2 left-0"
      >
        <span className="text-xl font-bold font-Poppins ml-12 mr-5 md:text-2xl ">Read more</span>
        <div className='bg-white rounded-[1050px] text-sky-900'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
            />
          </svg>
        </div>
      </NavLink>

        </button>
        
      </motion.div>
    </>
  );
};

export default Director;
