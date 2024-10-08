

import  { useEffect } from "react";

import { motion } from "framer-motion"
import { useMediaQuery } from '@mui/material';



const DirectorsMesssage = () => {

 

 
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  
  const isMediumScreen = useMediaQuery('(min-width: 1024px)');
  const isSmallScreen = useMediaQuery('(max-width: 884px)');
  
  return (
    <>
    
    


     
     
    

  
      <div className="object-cover mt-[110px] ">
        <img src="/Director.JPG" alt="" 
        className="w-full h-full object-cover inset-0 bg-center min-h-screen"
        />

        <h1 className='text-2xl text-sky-900 font-bold font-poppins  border-l-4 border-red-700 py-6 p-3 mt-[-20px] ml-4'>
            Message from our Director
        </h1>
      </div>



      <div className='ml-4'>
      

      </div>
      {/* Director message */}
      <div className='mt-10 mb-4 ml-2 mr-2 shadow-2xl'
      
      >
      <figure className="md:flex  p-8 md:p-0 bg-sky-900">
             
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:ml-20">
          <blockquote className="text-white text-lg font-medium md:text-left text-left">
                  <motion.p
                     
                      initial={{ opacity: 0, x: 0, y: isMediumScreen ? 0 : isSmallScreen ? 50 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        delay: 0.2,
                        isMediumScreen: { type: "spring", stiffness: 60, opacity: { duration: 1, ease: "easeIn" } },
                        isSmallScreen: { type: "spring", stiffness: 60, opacity: { duration: 1, ease: "easeIn" } },
                      }}
                    >
                      <span className="quote-mark">“</span>
                      I am grateful to welcome you to Ed Educational Complex, we are committed to nurturing academic excellence and total development of every learner in our care. Ed is a Co-Educational school in Mataheko near Afienya. Our mission is to provide a Christ-centered, supportive, and stimulating environment that encourages curiosity, creativity, and critical thinking. We foster love for learning and empower our learners to become creative citizens ready to face any challenges in the future. We have classes for Pre-School (creche, nursery, K.G 1 and 2), Primary (1 - 6), and JHS (1-3). Our highly trained and dedicated teaching staff are here to guide and inspire all learners on their educational journey. This makes Ed the school of choice for total development of all children from Pre-School to JHS. You are always welcome from Monday to Friday from 6:30am to 5:00pm to talk to the Director, Administrator, or Headteacher. You may also call us on 0244667710, 0208240435, 0560143603. Warm regards.
                      
                </motion.p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-white font-Poppins text-xl">
                Mr. Samuel Okine Doku
              </div>
              <div className="text-white">
                Director
              </div>
            </figcaption>
          </div>
        </figure>
              

      </div>
      
        
  
    </>


    
  );
};

export default DirectorsMesssage;
