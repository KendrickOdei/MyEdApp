import {motion} from 'framer-motion'

const Location = ()=> {
    return (
        <motion.div className="relative w-full h-64 bottom-5 min-h-screen"
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
          
        
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.6460533226364!2d-0.002610720443460401!3d5.763968179311265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208107f2586c41%3A0x937fece333b0b81c!2sED%20Educational%20Complex!5e0!3m2!1sen!2sgh!4v1723213350594!5m2!1sen!2sgh"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy">
        </iframe>
        </motion.div>


    )
}
export default Location;

