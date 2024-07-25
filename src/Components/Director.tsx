import { motion } from 'framer-motion';


const Director = () => {
  return (
    <>
      <motion.div
        className="relative md:flex md:flex-col md:items-center md:justify-center ml-5 mr-5 p-8 bg-cover bg-center bg-no-repeat mb-12 mt-[-6px] md:h-[520px] bg-black"
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
       
        <div className="relative z-10 md:flex md:flex-col md:items-center md:justify-center max-w-2xl mx-auto text-center ">
          <div className="text-white text-center md:text-left space-y-4">
            <motion.h2
              className="md:text-4xl font-bold md:p-2 text-2xl mt-[-16px] border-b-2 border-red-600 gap-4  p-4 md:border-b-2 md:border-red-600"
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
            <p>
            Comprehensive Curriculum
              At Ed Educational Complex, our curriculum is designed to foster academic excellence, critical thinking, and creativity. We offer a diverse range of subjects and extracurricular activities to ensure a well-rounded education.

              Experienced Faculty
              Our educators are passionate, experienced, and dedicated to helping students achieve their full potential. They bring a wealth of knowledge and expertise to the classroom, creating an engaging and supportive learning environment.

              State-of-the-Art Facilities
              Our campus is equipped with modern facilities, including science labs, computer labs, sports complexes, and art studios. These resources provide students with the tools they need to excel in their academic and personal pursuits
            </p>
    
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Director;
