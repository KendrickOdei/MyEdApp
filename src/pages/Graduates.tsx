

import {motion} from 'framer-motion'


const Graduates = () => {
 
  

  return (
    <section className="bg-black py-16 min-h-[800px]  graduates ">
      
      <div className=" p-1 left-0 rounded-md flex items-center border-container ml-4">
          <motion.div className="absolute mt-8 right-0 transform translate-y-1/2 w-32 h-24  shadow rounded overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                x: { type: "inertia", velocity: 10, stiffness: 30 },
                opacity: { duration: 1, ease: "easeIn" },
                duration: 0.6
              }}
              viewport={{ once: true }}
          >
                <img src="/img1.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0 transform translate-y-1/2 w-28 h-28 mt-48 shadow rounded overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.4,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 1, ease: "easeIn" },
             duration: 0.6
           }}
           viewport={{ once: true }}
          >
                <img src="/img2.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-24 transform translate-y-1/2 w-20 h-16 mt-[-40px]  shadow rounded overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.2,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 1, ease: "easeIn" },
             duration: 0.6
           }}
           viewport={{ once: true }}
          >
                <img src="/img3.JPG"  className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>


          <motion.div className="absolute  right-0 mb-0 transform translate-y-1/2 w-24 h-24 mt-[950px]   shadow rounded overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 0.9,
             x: { type: "inertia", velocity: 10, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.6
           }}
           viewport={{ once: true }}
          >
                <img src="/Hero.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  right-24 transform translate-y-1/2 w-24 h-24 mt-[1250px]   shadow rounded overflow-hidden"
           initial={{ x: -100, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{
             delay: 1,
             y: { type: "inertia", velocity: 20, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.6
           }}
           viewport={{ once: true }}
          >
                <img src="/img1.JPG" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>

          <motion.div className="absolute  left-0  transform translate-y-1/2 w-24 h-20 mb-[-1090px]   shadow rounded overflow-hidden"
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{
             delay: 1.1,
             x: { type: "inertia", velocity: 20, stiffness: 30 },
             opacity: { duration: 3, ease: "easeIn" },
             duration: 0.6
           }}
           viewport={{ once: true }}
          >
                <img src="/darkHero.jpeg" className="w-full h-full object-cover" alt="Athlete 6" />
          </motion.div>


       

          
      </div>
      <div className=" flex flex-col items-center justify-center space-y-8 mt-[150px]">
          <h2 className="text-3xl font-bold text-center text-white">Celebrating Our First Graduation Ceremony</h2>
          <p className="text-center text-white">
          We are thrilled to announce that ED EDUCATIONAL COMPLEX recently held its first graduation ceremony for Kindergarten 2 and Basic 6 students. This momentous occasion marks a significant milestone in our school's history and the beginning of a new chapter for our young graduates.
          </p>
          <button className="bg-sky-900 hover:bg-[#3D2252] text-white px-4 py-2 rounded ">
          
            
            Read More
          </button>
        </div>

        {/* Surrounding Images */}
       
    </section>
  );
};

export default Graduates;
