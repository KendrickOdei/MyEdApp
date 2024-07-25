import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";


export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  

    

  

  return (
    <>
      <motion.div
        className="fixed top-36 left-0 right-0 h-4 bg-red-600 transform origin-left"
        style={{ scaleX: scrollYProgress }}
      >
        
      </motion.div>

      
    </>
  );
}
