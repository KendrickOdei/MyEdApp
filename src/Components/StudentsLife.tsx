import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";



const StudentsLife = () => {
    return (
        <>
        <section className="team-section py-16 px-2 bg-[#033B5D]">
        <div className="container mx-auto">
            <h2 className="text-3xl text-white font-bold text-center mb-8">OUR CAMPUS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="team-member bg-white   shadow-lg">
                <img src="/C1.jpg" alt="Team Member 1" className="md:w-[500px] md:h-[500px] w-full h-full object-cover "/>
             
               
            </div>
                    {/* Pic 2 */}

            <div className="team-member bg-white   shadow-lg">
                <img src="/C2.jpg" alt="Team Member 1" className="md:w-[500px] md:h-[500px] w-full h-full object-cover"/>
                
               
            </div>

              {/* Pic 2 */}

              <div className="team-member bg-white   shadow-lg">
                <img src="/C3.jpg" alt="Team Member 1" className="md:w-[500px] md:h-[500px] w-full h-full object-cover"/>
                
               
            </div>

            {/* more images */}
           
        </div>
        </div>
        
        </section>

        {/* dif */}
        <section className="bg-[#033B5D]   min-h-[800px]">
      
      <div className=" p-1 left-0 rounded-md flex mt-16  items-center border-container ml-4 ">
          <motion.div className="absolute mt-8 right-0 transform translate-y-1/2 w-32 h-24 md:h-[220px] md:w-[200px] shadow  overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                x: { type: "inertia", velocity: 10, stiffness: 30 },
                opacity: { duration: 1, ease: "easeIn" },
                duration: 0.3
              }}
              viewport={{ once: true }}
          >
                <img src="/SL1.JPG" className="w-full h-full object-cover " alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0 transform translate-y-1/2 w-28 h-28 md:h-[200px] md:w-[220px] mt-48 shadow  overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.4,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 1, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/SL2 .JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute hidden sm:block left-[420px]  transform translate-y-1/2 w-28 h-24 md:h-[220px] md:w-[200px] mt-24 shadow rounded overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.4,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 1, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/SL3.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute hidden sm:block right-[300px] transform translate-y-1/2 w-28 md:w-[150px] md:h-[150px] h-24 mt-44 shadow  overflow-hidden"
           initial={{ x: -100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 0.4,
             y: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 1, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/Grd2.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          


          <motion.div className="absolute  right-0 mb-0 transform translate-y-1/2 w-24 h-24 mt-[950px]   shadow  overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.9,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/SL4.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  right-24 transform translate-y-1/2 w-24 h-24 md:w-[160px] mt-[1250px]   shadow  overflow-hidden"
           initial={{ x: -100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 1,
             y: { type: "inertia", velocity: 20, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/SL5.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0  transform translate-y-1/2 w-24 h-20 md:w-[190px] md:h-[230px] mb-[-1090px] md:mb-[-910px]   shadow  overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 1.1,
             x: { type: "inertia", velocity: 20, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/Grd6.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0 hidden sm:block  md:left-[310px] transform translate-y-1/2 w-24 h-20 md:w-[230px] md:h-[130px] mb-[-1320px]   shadow  overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 1.1,
             x: { type: "inertia", velocity: 20, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/Grd6.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0 hidden sm:block  md:left-[640px] transform translate-y-1/2 w-24 h-20 md:w-[150px] md:h-[180px] mb-[-1120px]   shadow  overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 1.1,
             x: { type: "inertia", velocity: 20, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/Grd6.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>


       

          
      </div>
      <div className=" flex flex-col items-center justify-center space-y-8 md:mt-[190px] mt-[160px] ">
          <h2 className="text-3xl font-bold text-center text-white">Memorable moments from our school celebrations—making memories that last a lifetime!</h2>
          <p className="text-center text-white">
          Embracing the great outdoors—learning and fun in every corner of our campus!
          </p>
          <button className="bg-black hover:bg-[#3D2252] text-white font-bold md:text-2xl px-4 py-2 rounded ">
            <NavLink
            to='/GraduationNews'
            >
              Read More
            </NavLink>
          
            
            
          </button>
        </div>

        {/* Surrounding Images */}
       
    </section>
        </>
    )
}

export default StudentsLife;