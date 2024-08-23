
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'


const Graduates = () => {
 
  

  return (
    <section className="bg-black  graduates min-h-[800px]">
      
      <div className=" p-1 left-0 rounded-md flex mt-16  items-center border-container ml-4 ">
          <motion.div className="absolute mt-8 right-0 transform translate-y-1/2 w-32 h-24 md:h-[150px] md:w-[200px] shadow rounded overflow-hidden"
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
                <img src="/Grd1.JPG" className="w-full h-full object-cover " alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0 transform translate-y-1/2 w-28 h-28 md:h-[180px] md:w-[150px] mt-48 shadow rounded overflow-hidden"
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
                <img src="/Grd2.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute hidden sm:block left-[520px]  transform translate-y-1/2 w-28 h-24 md:h-[120px] md:w-[170px] mt-32 shadow rounded overflow-hidden"
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
                <img src="/Grd2.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
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
                <img src="/Graduates.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute md:left-[250px]  left-24 transform translate-y-1/2 w-20 h-16 md:h-[150px] md:w-[180px] mt-[-40px]  shadow  overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 1, ease: "easeIn" },
             duration: 0.3
           }}
           viewport={{ once: true }}
          >
                <img src="/Grd3.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>


          <motion.div className="absolute  right-0 mb-0 transform translate-y-1/2 w-24 h-24 mt-[1010px]   shadow  overflow-hidden"
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
                <img src="/Grd4.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  right-24 transform translate-y-1/2 w-24 h-24 md:w-[160px] mt-[1300px]   shadow  overflow-hidden"
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
                <img src="/Grd5.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0  transform translate-y-1/2 w-24 h-20 md:w-[150px] md:h-[130px] mb-[-1090px] md:mb-[-910px]   shadow  overflow-hidden"
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
                <img src="/Graduates.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
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
      <div className=" flex flex-col items-center justify-center space-y-8 mt-[150px]">
          <h2 className="text-3xl font-bold text-center text-white">Celebrating Our First Graduation Ceremony</h2>
          <p className="text-center text-white">
          We are thrilled to announce that ED EDUCATIONAL COMPLEX recently held its first graduation ceremony for Kindergarten 2 and Basic 6 students. This momentous occasion marks a significant milestone in our school's history and the beginning of a new chapter for our young graduates.
          </p>
          <button className="bg-sky-900 hover:bg-[#3D2252] text-white px-4 py-2 rounded ">
            <NavLink
            to='/GraduationNews'
            >
              Read More
            </NavLink>
          
            
            
          </button>
        </div>

        {/* Surrounding Images */}
       
    </section>
  );
};

export default Graduates;
